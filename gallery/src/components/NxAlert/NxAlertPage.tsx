/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {GalleryDescriptionTile, GalleryTile} from '../../gallery-components/GalleryTiles';

import NxAlertExample from './NxAlertExample';
import NxErrorAlertExample from './NxErrorAlertExample';
import NxWarningAlertExample from './NxWarningAlertExample';
import NxInfoAlertExample from './NxInfoAlertExample';
import NxSuccessAlertExample from './NxSuccessAlertExample';
import CodeExample from '../../CodeExample';

const nxErrorAlertExampleCode = require('!!raw-loader!./NxErrorAlertExample').default,
    nxInfoAlertExampleCode = require('!!raw-loader!./NxInfoAlertExample').default,
    nxSuccessAlertExampleCode = require('!!raw-loader!./NxSuccessAlertExample').default,
    nxWarningAlertExampleCode = require('!!raw-loader!./NxWarningAlertExample').default,
    nxAlertExampleCode = require('!!raw-loader!./NxAlertExample').default;

const NxAlertPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">Generic alert.</p>
      <p className="nx-p">Handy for DIY alert variations</p>
      <p className="nx-p">Accepts any prop that is valid on a div as well as the following:</p>
      <table className="nx-table nx-table--gallery-props">
        <thead>
          <tr className="nx-table-row">
            <th className="nx-cell nx-cell--header">Prop</th>
            <th className="nx-cell nx-cell--header">Type</th>
            <th className="nx-cell nx-cell--header">Required</th>
            <th className="nx-cell nx-cell--header">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="nx-table-row">
            <td className="nx-cell">icon</td>
            <td className="nx-cell">FontAwesome's Icons</td>
            <td className="nx-cell">Yes</td>
            <td className="nx-cell">
              A FontAwesome icon to use in the alert message
            </td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <GalleryTile title="Alert Example">
      <NxAlertExample/>
      <CodeExample content={nxAlertExampleCode} />
    </GalleryTile>

    <GalleryTile title="NxErrorAlert, NxInfoAlert, NxWarningAlert">
      <p className="nx-p">Standard sonatype alerts.</p>
      <p className="nx-p">They come in three variations: Error, Info, and Warning.</p>
      <p className="nx-p">Accepts any prop that is valid on a div</p>
    </GalleryTile>

    <GalleryTile title="Success Alert Example">
      <NxSuccessAlertExample />
      <CodeExample content={nxSuccessAlertExampleCode} />
    </GalleryTile>

    <GalleryTile title="Error Alert Example">
      <NxErrorAlertExample />
      <CodeExample content={nxErrorAlertExampleCode} />
    </GalleryTile>

    <GalleryTile title="Info Alert Example">
      <NxInfoAlertExample />
      <CodeExample content={nxInfoAlertExampleCode} />
    </GalleryTile>

    <GalleryTile title="Warning Alert Example">
      <NxWarningAlertExample />
      <CodeExample content={nxWarningAlertExampleCode} />
    </GalleryTile>
  </>;

export default NxAlertPage;
