const express = require('express');
const path = require('path');
//const { send } = require('process');

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'client')))
    .get('/', (request, response) => response.render('index.html'));


app.listen(4000,function(){
        console.log('Server is running on port 4000')
    });


