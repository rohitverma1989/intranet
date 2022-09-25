const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

const app = express();
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use(cors())
const port = 3001;


app.get('/getuser', (req, res) => {
    res.send({ name: 'saurabh', age: 26 });
});

app.get('/getadmin', (req, res) => {
    res.send({ name: 'gaurav', age: 22, role: 'admin with read and write' });
});
app.post('/createuser', (req, res) => {
    console.log('--------------------------');
    console.log(req.body);
    res.send('user created successfully')
});


app.listen(port, () => {
    console.log("application is up now");
});
