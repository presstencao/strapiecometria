'use strict';

/**
 * telemetria service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::telemetria.telemetria');
