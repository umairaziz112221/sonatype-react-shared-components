/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { LiHTMLAttributes } from 'react';
import PropTypes from 'prop-types';

export type Props = LiHTMLAttributes<HTMLLIElement> & {
  id: string;
  active: boolean | 'true' | 'false';
};

export const propTypes: PropTypes.ValidationMap<Props> = {
  id: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  children: PropTypes.node
};
