/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState, KeyboardEvent } from 'react';
import { NxSubmitMask, NxButton } from '@sonatype/react-shared-components';

function NxSubmitMaskFullscreenExample() {
  const [maskVisible, setMaskVisible] = useState(false);

  function handleKeyUp(evt: KeyboardEvent) {
    if (evt.key === 'Escape') {
      setMaskVisible(false);
    }
  }

  return (
    <div onKeyUp={handleKeyUp} className="gallery-submit-mask-area">
      <p className="nx-p">
        Note: once the mask is visible in this example, press ESC to dismiss it.
        (This is just part of this example, not built-in mask behavior. It only works as long as the button has focus)
      </p>
      <NxButton onClick={setMaskVisible.bind(null, true)}>Click here to create a fullscreen NxSubmitMask</NxButton>
      { maskVisible && <NxSubmitMask fullscreen /> }
    </div>
  );
}

export default NxSubmitMaskFullscreenExample;
