const fatorialService = {
    async calculaFatorial(numero) {
        try {
            return (numero * numero);
        } catch (err) {
            return 'error';
        }
    }
}

module.exports = fatorialService;
