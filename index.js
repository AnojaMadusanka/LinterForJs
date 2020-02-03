const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send('Lint');
    process.exit(1);
});

const obj = {
    hello: function() {
        console.log('Linter');
    }
}

class A {
    foo() {
        console.log('Linter');
    }
}