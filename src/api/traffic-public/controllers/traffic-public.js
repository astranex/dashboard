'use strict';

/**
 *  traffic-public controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::traffic-public.traffic-public');
