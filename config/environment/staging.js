'use strict';

module.exports = {
    dbUrl: process.env.DB_URL || 'mongodb://localhost:27017/Queuing',
    db_user: process.env.DB_USER || 'Queuing',
    db_password: process.env.DB_USER || '12345',
    port: process.env.APP_PORT || 3000,
    app_name: process.env.APP_NAME || "Queuing",
    api_host_url: process.env.API_HOST_URL || 'http://localhost:3000',
    frontend_host_url: process.env.FRONTEND_HOST_URL || 'http://localhost:9000',
    api_version: process.env.API_VERSION || '/api/v1'
};
