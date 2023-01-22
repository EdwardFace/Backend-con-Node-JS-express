'use strict'

let app = require('./app');
let port = process.env.PORT || 3678;

app.listen(port,()=>{
    console.log(`servidor corriendo en ${port}`);
});


