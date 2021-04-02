const fatorialRouter = require('express').Router();
const fatorialController = require('../controllers/fatorialController');

/* CALCULA FATORIAL */
fatorialRouter.get('/calcula-fatorial/:numero', fatorialController.calculaFatorial);

module.exports = fatorialRouter;
