'use strict';

/**
 * traffic-public router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::traffic-public.traffic-public');
