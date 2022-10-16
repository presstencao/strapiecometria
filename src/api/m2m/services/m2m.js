'use strict';

/**
 * m2m service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::m2m.m2m');
