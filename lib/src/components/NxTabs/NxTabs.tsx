/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {Children, cloneElement, isValidElement, useMemo} from 'react';
import classnames from 'classnames';

import {Props as NxTabProps} from '../NxTab/types';
import {Props as NxTabPanelProps} from '../NxTabPanel/types';

import { Props, propTypes } from './types';
export { Props } from './types';

interface ActiveTabContextType {
  activeTab: number;
  onTabSelect: (index: number) => void;
};

type IndexContextType = number;

export const ActiveTabContext = React.createContext<ActiveTabContextType>({activeTab: 0, onTabSelect: () => {}});
export const IndexContext = React.createContext<IndexContextType>(0);

let tabId = 0;

const NxTabs = function NxTabsElement(props: Props) {
  const {activeTab, onTabSelect, id, className, children, ...attrs} = props;

  const activeTabContext: ActiveTabContextType = {
    activeTab: activeTab || 0,
    onTabSelect: onTabSelect || (() => {})
  };

  const [tabList, ...tabPanels] = Children.toArray(children);

  if (!isValidElement(tabList)) {
    console.error('NxTabs must have an NxTabList');
    return null;
  }
  else if (tabList.props.children.length === 0) {
    console.error('NxTabs must have at least one NxTab');
    return null;
  }

  const rootId = id || 'nx-tabs-' + useMemo(() => tabId++, []);

  const clonedTabList = cloneElement(tabList, {
    children: Children.toArray(tabList.props.children).map((tab, index) => {
      if (isValidElement<NxTabProps>(tab)) {
        return (
          <IndexContext.Provider value={index} key={index}>
            {cloneElement(tab, {
              id: `${rootId}-tab-${index}`,
              'aria-controls': `${rootId}-tab-panel-${index}`
            })}
          </IndexContext.Provider>
        );
      }
      return tab;
    })
  });

  const clonedTabPanels = tabPanels.map((tabPanel, index) => {
    if (isValidElement<NxTabPanelProps>(tabPanel)) {
      return cloneElement(tabPanel, {'aria-labelledby': `${id}-tab-panel-${index}`, index});
    }
    return tabPanel;
  });

  return (
    <ActiveTabContext.Provider value={activeTabContext}>
      <div id={rootId} className={classnames('nx-tabs', className)} {...attrs}>
        {clonedTabList}
        {clonedTabPanels}
      </div>
    </ActiveTabContext.Provider>
  );
};

NxTabs.propTypes = propTypes;

export default NxTabs;
