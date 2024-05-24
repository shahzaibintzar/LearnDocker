const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.json([
        {
            id: 1,
            name: 'John'
        },
        {
            id: 2,
            name: 'Jane'
        },
        {
            id: 3,
            name: 'Mary'
        }
    ])
    
})

app.listen(4000, () => {
    console.log('Server is running on port 4000');
})