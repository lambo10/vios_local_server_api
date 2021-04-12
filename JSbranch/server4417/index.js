const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')({ origin: true });
const app = express();

app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json());
app.use(express.urlencoded());


app.get('/general_server_files', (req, res) => {
    const path = req.query["path"];
    res.sendFile('./general_server_files/'+path, { root: __dirname });
});

app.get('/employee', (req, res) => {
    const path = req.query["path"];
    res.sendFile('./employee/'+path, { root: __dirname });
});

app.get('/patient', (req, res) => {
    const path = req.query["path"];
    res.sendFile('./patient/'+path, { root: __dirname });
});

app.get('/formFiles/:path', (req, res) => {
    res.sendFile('./formFiles/'+req.params.path, { root: __dirname });
});

app.listen(4417,	()	=>	console.log('VIOS static file server - ready'));

