const express = require('express');
const cors = require('cors');
const allowCors = require('../config/cors');
const env = require('dotenv');

module.exports = () => {
    env.config({
        path: '.env',
    });

    const app = express();

    app.use(cors());
    app.use(allowCors);

    /* SETTING UP MIDDLEWARES */
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    /* DEFINING CUSTOM ROUTES */
    let fatorial_route = require('../src/routes/fatorialRoute');

    /* LINKING CUSTOM ROUTES */
    app.use('/api/v1', fatorial_route);

    /* SETTING APP VARIABLES */
    app.set('port', process.env.PORT_DEV || 8080);

    return app;
}