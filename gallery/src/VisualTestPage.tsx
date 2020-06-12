/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { JSXElementConstructor } from 'react';

// Pull in every *Example file in the gallery
const examplesContext = require.context('.', true, /(pages|components|guidelines|styles)\/.*Example.tsx$/),
    examples: JSXElementConstructor<any>[] = examplesContext.keys().map(
        (name: string) => examplesContext(name).default);

export default function VisualTestPage() {
  return (
    <main>
      {examples.map((Example, idx) => <Example key={idx} />)}
    </main>
  );
}
