const express = require('express');
const app = express();



app.get('/', async (req,res) =>{
    res.send('Follow documentation ')
})


app.listen(8999, () => {

})

