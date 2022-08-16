'use strict';

/**
 *  traffic controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::traffic.traffic');
