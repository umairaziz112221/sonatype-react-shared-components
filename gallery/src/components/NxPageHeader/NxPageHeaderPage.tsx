/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import SimplePageHeaderExample from './SimplePageHeaderExample';
import ProductNamePageHeaderExample from './ProductNamePageHeaderExample';
import ProductNameAndVersionPageHeaderExample from './ProductNameAndVersionPageHeaderExample';
import HomeLinkPageHeaderExample from './HomeLinkPageHeaderExample';
import LinksPageHeaderExample from './LinksPageHeaderExample';
import ExtraContentPageHeaderExample from './ExtraContentPageHeaderExample';
import ComplexPageHeaderExample from './ComplexPageHeaderExample';

const simplePageHeaderExampleCode = require('!!raw-loader!./SimplePageHeaderExample').default,
    productNamePageHeaderExampleCode = require('!!raw-loader!./ProductNamePageHeaderExample').default,
    productNameAndVersionPageHeaderExampleCode =
        require('!!raw-loader!./ProductNameAndVersionPageHeaderExample').default,
    homeLinkPageHeaderExampleCode = require('!!raw-loader!./HomeLinkPageHeaderExample').default,
    linksPageHeaderExampleCode = require('!!raw-loader!./LinksPageHeaderExample').default,
    extraContentPageHeaderExampleCode = require('!!raw-loader!./ExtraContentPageHeaderExample').default,
    complexPageHeaderExampleCode = require('!!raw-loader!./ComplexPageHeaderExample').default;

const NxPageHeaderPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        <code className="nx-code">NxPageHeader</code> is a React component encapsulating the standard Sonatype
        page header structure and logo.
      </p>
      <h3 className="nx-h3 nx-tile__subsection-header">Props</h3>
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
            <td className="nx-cell">productInfo</td>
            <td className="nx-cell">object</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              An optional object containing at least one field: <code className="nx-code">name</code>, the product
              name to display in the header. Additionally, this object may contain
              a <code className="nx-code">version</code> field holding the product's version number to display.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">homeLink</td>
            <td className="nx-cell">string</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              A URL (typically relative) that navigates to the home page of the application. If this prop is
              present, the <q>Sonatype</q> logo in the header will be a link to this home page.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">links</td>
            <td className="nx-cell">array</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              An optional array of objects describing navigation links to display in the middle section of the header.
              Each link object should contain a <code className="nx-code">name</code> to be displayed and
              a <code className="nx-code">href</code> for the link. Additionally, at most one link should include
              an <code className="nx-code">current</code> flag set to true indicating that it should be styled as
              the currently active link.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">children</td>
            <td className="nx-cell">ReactNode</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              Optional additional JSX content that will be displayed at the right end of the header.
            </td>
          </tr>
        </tbody>
      </table>
      <p className="nx-p">
        Note that in each of the following examples, the headers have been tweaked to display in the normal page
        flow for the sake of demonstration. Normally, they would automatically display at the top of the viewport
        using CSS fixed positioning.
      </p>
      <p className="nx-p">
        It is the responsibility of calling code to ensure the that content included in the header fits in a single
        row at all supported resolutions. Behavior of this component when content exceeds the space allowed is
        unspecified.
      </p>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Simple Header"
                        codeExamples={simplePageHeaderExampleCode}
                        liveExample={SimplePageHeaderExample}>
      A minimal instance of <code className="nx-code">NxPageHeader</code> which includes no
      product name, no version, no links, and no additional content.
    </GalleryExampleTile>

    <GalleryExampleTile title="Header with Product Name"
                        codeExamples={productNamePageHeaderExampleCode}
                        liveExample={ProductNamePageHeaderExample}>
      An instance of <code className="nx-code">NxPageHeader</code> which includes a product name.
    </GalleryExampleTile>

    <GalleryExampleTile title="Header with Product Name and Version"
                        codeExamples={productNameAndVersionPageHeaderExampleCode}
                        liveExample={ProductNameAndVersionPageHeaderExample}>
      An instance of <code className="nx-code">NxPageHeader</code> which includes a product name
      and version.
    </GalleryExampleTile>

    <GalleryExampleTile title="Header with Home Link"
                        codeExamples={homeLinkPageHeaderExampleCode}
                        liveExample={HomeLinkPageHeaderExample}>
      An instance of <code className="nx-code">NxPageHeader</code> which includes a home link
      for the logo.
    </GalleryExampleTile>

    <GalleryExampleTile title="Header with Links"
                        codeExamples={linksPageHeaderExampleCode}
                        liveExample={LinksPageHeaderExample}>
      An instance of <code className="nx-code">NxPageHeader</code> which includes links.
    </GalleryExampleTile>

    <GalleryExampleTile title="Header with Extra Content"
                        codeExamples={extraContentPageHeaderExampleCode}
                        liveExample={ExtraContentPageHeaderExample}>
      An instance of <code className="nx-code">NxPageHeader</code> with extra content on the
      right-hand side.
    </GalleryExampleTile>

    <GalleryExampleTile title="Complex Page Header"
                        codeExamples={complexPageHeaderExampleCode}
                        liveExample={ComplexPageHeaderExample}>
      An instance of <code className="nx-code">NxPageHeader</code> which includes all features
      at once.
    </GalleryExampleTile>
  </>;

export default NxPageHeaderPage;
