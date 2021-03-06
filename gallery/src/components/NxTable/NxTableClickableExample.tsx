/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {
  NxTable,
  NxTableBody,
  NxTableCell,
  NxTableHead,
  NxTableRow,
  NxFontAwesomeIcon
} from '@sonatype/react-shared-components';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const NxTableClickableExample = () => {
  const rows = [
    { name: 'Name 1' },
    { name: 'Name 2' },
    { name: 'Name 3' }
  ];

  return (
    <NxTable>
      <NxTableHead>
        <NxTableRow>
          <NxTableCell>Name</NxTableCell>
          <NxTableCell>Header 2</NxTableCell>
          <NxTableCell hasIcon />
        </NxTableRow>
      </NxTableHead>
      <NxTableBody>
        {rows.map(row =>
          <NxTableRow key={row.name} isClickable onClick={() => alert(`Clicked ${row.name}`)}>
            <NxTableCell>{row.name}</NxTableCell>
            <NxTableCell>Content</NxTableCell>
            <NxTableCell hasIcon><NxFontAwesomeIcon icon={faChevronRight}/></NxTableCell>
          </NxTableRow>
        )}
      </NxTableBody>
    </NxTable>
  );
};

export default NxTableClickableExample;
