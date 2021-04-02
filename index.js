const app = require('./api/loaders/express')();
const port = app.get('port');

/* RUNNING APPLICATION */
app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`);
});
