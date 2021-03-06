/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {useState} from 'react';

import {NxModal, NxFontAwesomeIcon} from '@sonatype/react-shared-components';
import {faAngry} from '@fortawesome/free-solid-svg-icons';

export default function NxModalFormExample() {
  const [showModal, setShowModal] = useState(false);
  const modalCloseHandler = () => setShowModal(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className="nx-btn">Open Modal with Form</button>
      {showModal &&
        <NxModal id="nx-modal-form-example" onClose={modalCloseHandler}>
          <form className="nx-form nx-form--simple">
            <header className="nx-modal-header">
              <h2 className="nx-h2">
                <NxFontAwesomeIcon icon={faAngry} />
                <span>NxModal header with form content</span>
              </h2>
            </header>
            <div className="nx-modal-content">
              <div className="nx-form-group">
                <label className="nx-label">
                  Username
                  <input type="text"
                         className="nx-text-input"
                         placeholder="Username"/>
                </label>
              </div>
              <div className="nx-form-group">
                <label className="nx-label">
                  Password
                  <input type="password"
                         className="nx-text-input"
                         placeholder="Password"/>
                </label>
              </div>
            </div>
            <footer className="nx-modal-footer">
              <div className="nx-btn-bar">
                <button type="button" onClick={modalCloseHandler} className="nx-btn nx-btn--primary">
                  Primary
                </button>
                <button type="button" onClick={modalCloseHandler} className="nx-btn">Default</button>
                <button type="button" onClick={modalCloseHandler} className="nx-btn nx-btn--tertiary">
                  Tertiary
                </button>
              </div>
            </footer>
          </form>
        </NxModal>
      }
    </>
  );
};
