/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import PropTypes from 'prop-types';
import {TdHTMLAttributes, ThHTMLAttributes} from 'react';

// Final Props are the HTMLProps & our re-definitions
export type Props = (TdHTMLAttributes<HTMLTableCellElement> | ThHTMLAttributes<HTMLTableHeaderCellElement>) & {
  isHeader?: boolean | null;
  isEmpty?: boolean | null;
  isError?: boolean | null;
  isNumeric?: boolean | null;
  isSortable?: boolean | null;
  hasIcon?: boolean | null;
  sortDir?: 'asc' | 'desc' | null;
};

export const propTypes: PropTypes.ValidationMap<Props> = {
  isHeader: PropTypes.bool,
  isEmpty: PropTypes.bool,
  isError: PropTypes.bool,
  isNumeric: PropTypes.bool,
  isSortable: PropTypes.bool,
  hasIcon: PropTypes.bool,
  sortDir: PropTypes.oneOf(['asc', 'desc', null]),
  children: PropTypes.node
};
