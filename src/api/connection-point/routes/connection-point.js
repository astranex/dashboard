'use strict';

/**
 * connection-point router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::connection-point.connection-point');
