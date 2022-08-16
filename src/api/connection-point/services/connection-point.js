'use strict';

/**
 * connection-point service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::connection-point.connection-point');
