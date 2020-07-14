/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import classnames from 'classnames';

import { ActiveTabContext, IndexContext } from '../NxTabs/NxTabs';

import { Props, propTypes } from './types';
export { Props } from './types';

import './NxTab.scss';

const NxTab = function NxTabElement(props: Props) {
  // Use React.useContext instead of importing useContext for jest to mock the value in the test
  const {activeTab, onTabSelect} = React.useContext(ActiveTabContext);
  const index = React.useContext(IndexContext);
  const {id, tabIndex = 0, className, onClick, onKeyPress, ...attrs} = props;
  const active = activeTab === index;
  const classNames = classnames('nx-tab', className, { active });
  const selected = active ? 'true' : 'false';

  function handleKeyPress(event: React.KeyboardEvent<HTMLLIElement>) {
    if (onKeyPress) {
      onKeyPress(event);
    }
    if (!event.isDefaultPrevented() && (event.key === ' ' || event.key === 'Enter')) {
      event.preventDefault();
      onTabSelect(index);
    }
  }

  function handleClick(event: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    if (onClick) {
      onClick(event);
    }
    if (!event.isDefaultPrevented()) {
      onTabSelect(index);
    }
  }

  return (
    <li role="tab"
        id={id}
        className={classNames}
        aria-selected={selected}
        onKeyPress={handleKeyPress}
        onClick={handleClick}
        tabIndex={tabIndex}
        {...attrs} />
  );
};

NxTab.propTypes = propTypes;

export default NxTab;
