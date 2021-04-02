const fatorialService = require('../services/fatorialService');

const fatorialController = {
    async calculaFatorial(req, res) {
        if (!Number.isInteger(Number(req.params.numero))){
            return res.status(400).json({
                message: 'o parametro nao e um numero',
                status: 'bad request',
            });
        }

        if (req.params.numero == 2) {
            return res.status(400).json({
                message: 'dois não pode',
            });
        }

        if (req.params.numero == 4) {
            return res.status(400).json({
                message: 'quatro também não pode',
            });
        }
        
        const response = await fatorialService.calculaFatorial(req.params.numero);
        
        if (response == 'error') {
            return res.status(400).json({
                message: 'Não foi possível calcular o fatorial deste número',
                status: 'Bad request',
            });
        } else {
            return res.status(200).json({
                fatorial: response,
                status: 'ok',
            });
        }
    },
};

module.exports = fatorialController;
