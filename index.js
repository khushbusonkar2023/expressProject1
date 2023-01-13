const  express = require('express');
const format = require("date-format");
const { request } = require('express');
const app = express()

const PORT = 4000

app.get('/', (req, res) =>{
    res.status(200).send("<h1>Hello World</h1>");
});



app.get('/api/v1/linkedin', (req,res) => {
    const instaSocial = {
        user : "khushbusonkar",
        followers : 50000000000,
        follows : 70,
        date : format.asString("dd[MM] : hh:mm:ss", new Date()),
    };
    res.status(200).json(instaSocial);
});

app.get('/api/v1/facebook', (req,res) =>{
    const instaSocial = {
        user: "khushbufacebook",
        followers :200000000000,
        follows:67,
        date : format("dd[MM] - hh:mm:ss", new Date()),
    };
    res.status(200).json(instaSocial);
});

app.get('/api/v1/instagram', (req,res) =>{
    const instaSocial ={
        user:"khushbuinsta",
        followers:900000000000,
        follows:89,
        date:format("dd[MM] - hh:mm:ss", new Date()),
    }

    res.status(200).json(instaSocial);
});

app.get('/api/v1/:token', (req,res) =>{
    console.log(req.params.token);
    res.status(200).json({
        param: req.params.token
    });
});
app.listen ( PORT, () =>{
    console.log(`listen from the ${PORT}`);
})

