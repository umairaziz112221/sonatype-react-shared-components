/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';
import { GalleryTile } from '../../gallery-components/GalleryTiles';
import CodeExample from '../../CodeExample';
import NxFormLayoutExample from './NxFormLayoutExample';
import NxFormHorizontalLayoutExample from './NxFormHorizontalLayoutExample';

const NxFormLayoutCode = require('!!raw-loader!./NxFormLayoutExample').default,
    NxFormHorizontalLayoutCode = require('!!raw-loader!./NxFormHorizontalLayoutExample').default;

const NxFormLayoutPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        This page demonstrates the HTML and SCSS required for displaying form and form elements in an application.
        Note that all standard HTML elements in a form have corresponding SCSS classes. It's important that these
        classes are used correctly as they reset browser default form styles.
      </p>
      <p className="nx-p">
        This page does not demonstrate validation which is a part of the form element components which can be found
        in the menu to the left.
      </p>
      <table className="nx-table nx-table--gallery-props">
        <thead>
          <tr className="nx-table-row nx-table-row--header">
            <th className="nx-cell nx-cell--header">Class</th>
            <th className="nx-cell nx-cell--header">Location</th>
            <th className="nx-cell nx-cell--header">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-form</code></td>
            <td className="nx-cell">Top-Level</td>
            <td className="nx-cell">
              Default form class. Resets browser <code className="nx-code">&lt;form&gt;</code> attributes and applies
              NX styles.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-form--simple</code></td>
            <td className="nx-cell">Modifier</td>
            <td className="nx-cell">
              Removes border and padding from <code className="nx-code">.nx-form</code>.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-form-group</code></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">Basic container for form elements.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-form-row</code></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">
              Used as a parent when you want <code className="nx-code">.nx-form-group</code> blocks to display
              horizontally rather than stack vertically.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-btn-bar--forms</code></td>
            <td className="nx-cell">Modifier</td>
            <td className="nx-cell">
              Modifies <span className="nx-code">.nx-btn-bar</span> for form buttons, usually appears at the end
              of the form.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-label</code></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">Standard class for <code className="nx-code">&lt;label&gt;</code> elements.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-label--optional</code></td>
            <td className="nx-cell">Modifier</td>
            <td className="nx-cell">
              Used when you want "- optional" text to appear after a <code className="nx-code">&lt;label&gt;</code>
              element.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-sub-label</code></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">
              Used when you want text below the standard <code className="nx-code">&lt;label&gt;</code> text.
              <code className="nx-code">.nx-sub-label</code> is meant to be applied to a
              <code className="nx-code">&lt;span&gt;</code> located within
              <code className="nx-code">&lt;label&gt;</code>.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-fieldset</code></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">
              Applied to a <code className="nx-code">&lt;fieldset&gt;</code> element that wraps checkboxes or
              radio buttons.
            </td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <GalleryTile title="NX Form Layout Example">
      <NxFormLayoutExample />
      <CodeExample content={NxFormLayoutCode}/>
    </GalleryTile>

    <GalleryTile title="NX Form Horizontal Layout Example">
      <NxFormHorizontalLayoutExample />
      <CodeExample content={NxFormHorizontalLayoutCode}/>
    </GalleryTile>
  </>;

export default NxFormLayoutPage;
