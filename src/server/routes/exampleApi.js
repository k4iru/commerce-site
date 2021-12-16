module.exports = app => {
    app.get('/api/exampleApi', (req, res) => {
        res.send('test');
    });

    app.post('/api/exampleApi', (req, res) => {
        res.send('test');
    });
}