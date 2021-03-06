/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';

import {CommonProps, commonPropTypes} from '../commonTypes';
export {Option} from '../commonTypes';

export interface Props extends CommonProps {
  selectedId?: string | null;
  onChange: ((selected: string | null) => void);
}

export const propTypes: PropTypes.ValidationMap<Props> = {
  ...commonPropTypes,
  selectedId: PropTypes.string,
  onChange: PropTypes.func.isRequired
};
