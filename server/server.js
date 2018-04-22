const express = require('express');
const path = require('path');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3003;
const app = new express();

app.use(express.static(publicPath))

app.listen(port,() => {
    console.log(`The server is running on port ${port}`);
});