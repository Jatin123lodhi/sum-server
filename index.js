const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Hello World --     '+ new Date().toLocaleString());
});

// end point to get sum of two numbers
app.get('/sum', (req, res) => {
    const { a, b } = req.query;
    const sum = parseInt(a) + parseInt(b);
    res.send(`The sum of ${a} and ${b} is ${sum}`);
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

