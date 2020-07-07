/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import classnames from 'classnames';
import './NxRadio.scss';

import { Props, propTypes } from './types';
export { Props } from './types';

const NxRadio = forwardRef<HTMLLabelElement, Props>(
    function NxRadio({ name, value, onChange, isChecked, disabled, children, radioId, ...otherProps }, ref) {
      const labelClasses = classnames('nx-radio', {
            'nx-radio--disabled': disabled,
            'tm-checked': isChecked,
            'tm-unchecked': !isChecked
          }),
          circleProps = (isChecked && !disabled) ? { r: 6, strokeWidth: 4 } : { r: 7.5, strokeWidth: 1 };

      return (
        <label { ...otherProps } ref={ref} className={labelClasses}>
          <input className="nx-radio__input"
                 id={radioId || undefined}
                 type="radio"
                 name={name}
                 disabled={!!disabled}
                 checked={isChecked}
                 onChange={() => onChange && onChange(value)}
                 readOnly={!onChange}/>
          <svg className="nx-radio__circle-container" viewBox="-8 -8 16 16" focusable={false}>
            <circle { ...circleProps } className="nx-radio__circle"/>
          </svg>
          { children && <span className="nx-radio__content">{children}</span> }
        </label>
      );
    }
);

NxRadio.propTypes = propTypes;

export default NxRadio;
