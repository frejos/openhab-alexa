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

const AlexaCapability = require('./capability');
const AlexaDisplayCategory = require('../category');
const { Interface, Property } = require('../constants');
const { Percentage } = require('../properties');

/**
 * Defines Alexa.PercentageController interface capability class
 *  https://developer.amazon.com/docs/device-apis/alexa-percentagecontroller.html
 * @extends AlexaCapability
 */
class PercentageController extends AlexaCapability {
  /**
   * Returns interface
   * @return {String}
   */
  get interface() {
    return Interface.ALEXA_PERCENTAGE_CONTROLLER;
  }

  /**
   * Returns supported properties
   * @return {Object}
   */
  get supportedProperties() {
    return {
      [Property.PERCENTAGE]: Percentage
    };
  }

  /**
   * Returns default display categories
   * @return {Array}
   */
  get defaultDisplayCategories() {
    return [AlexaDisplayCategory.OTHER];
  }
}

module.exports = PercentageController;
