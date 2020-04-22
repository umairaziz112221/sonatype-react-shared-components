/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import classnames from 'classnames';
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';

import {ensureElement} from '../../util/reactUtil';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';

import { Props, propTypes } from './types';
export { Props } from './types';

const NxTableCell = function NxTableCell(props: Props) {
  const {
    isHeader = false,
    isEmpty = false,
    isError = false,
    isNumeric = false,
    isSortable = false,
    hasIcon = false,
    sortDir,
    className,
    children,
    ...attrs
  } = props;

  const classes = classnames('nx-cell', className, {
    'nx-cell--header': isHeader,
    'nx-cell--empty': isEmpty,
    'nx-error': isError,
    'nx-cell--num': isNumeric,
    'nx-cell--icon': hasIcon,
    'nx-cell--sortable': isSortable
  });

  let maskedSort;
  if (sortDir === 'asc') {
    maskedSort = (
      <>
        <NxFontAwesomeIcon icon={faSortDown} />
        <NxFontAwesomeIcon icon={faSortUp} />
      </>
    );
  }
  else if (sortDir === 'desc') {
    maskedSort = (
      <>
        <NxFontAwesomeIcon icon={faSortUp} />
        <NxFontAwesomeIcon icon={faSortDown} />
      </>
    );
  }
  else {
    maskedSort = <NxFontAwesomeIcon icon={faSort} />;
  }

  const Tag = isHeader ? 'th' : 'td';

  return (
    <Tag className={classes} {...attrs}>
      {ensureElement(children)}
      {isSortable && <span className="nx-cell__sort-icons fa-layers fa-fw">{maskedSort}</span>}
    </Tag>
  );
};

NxTableCell.propTypes = propTypes;

export default NxTableCell;
