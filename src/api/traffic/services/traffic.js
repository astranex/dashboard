'use strict';

/**
 * traffic service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::traffic.traffic');
