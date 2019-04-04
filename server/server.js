const path = require('path');
const express = require('express');
const app = new express();
const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(3000, () => {
    console.log('server is listening on port 3000')
});