/**
 * Copyright (c) 2010-2022 Contributors to the openHAB project
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0
 *
 * SPDX-License-Identifier: EPL-2.0
 */

const AlexaDisplayCategory = require('@alexa/smarthome/category');
const InteriorBlind = require('./interiorBlind');

/**
 * Defines external blind device type class
 * @extends InteriorBlind
 */
class ExteriorBlind extends InteriorBlind {
  /**
   * Returns supported names
   * @return {Array}
   */
  static get supportedNames() {
    return ['Awning', 'Shutter', 'ExteriorBlind'];
  }

  /**
   * Returns display categories
   * @return {Array}
   */
  static get displayCategories() {
    return [AlexaDisplayCategory.EXTERIOR_BLIND];
  }
}

module.exports = ExteriorBlind;
