'use strict';

/**
 * traffic-public service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::traffic-public.traffic-public');
