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

const { Capability, Property } = require('@alexa/smarthome/constants');
const DeviceAttribute = require('./attribute');

/**
 * Defines volume step attribute class
 * @extends DeviceAttribute
 */
class VolumeStep extends DeviceAttribute {
  /**
   * Returns supported names
   * @return {Array}
   */
  static get supportedNames() {
    return ['VolumeStep'];
  }

  /**
   * Returns capabilities
   * @return {Array}
   */
  static getCapabilities() {
    return [{ name: Capability.STEP_SPEAKER, property: Property.VOLUME }];
  }
}

module.exports = VolumeStep;
