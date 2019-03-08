const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Twitter Fetch
var trends = "NO TRENDS"

var Twit = require('twit')
var T = new Twit({
    consumer_key: "hR8Ew7aaaWIdNPJFFI3mTyAPv",
    consumer_secret: "treejdKGK0WGQJfnCdN3rpaI6tKPPIu7hna2OSR841MamXfXDI",
    access_token: "2888180595-M7T0VQgObd74OTLaBwreZf6BPKJM1aN8iYgpCsX",
    access_token_secret: "7Qsf2M5VNmsSTOKBXMafFi1BDHWMagy1SLsVtMOESJMOE",
    timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
    strictSSL: true // optional - requires SSL certificates to be valid.
});

twitterFetch = async (id = 23424802) => {
    console.log("tested")
    T.get("trends/place", { id: id }, function(err, data, response) {
        app.get('/api/trends/get', (req, res) => {
            res.send({express: JSON.stringify(data)})
        });
    })
}

twitterFetch()

app.post('/api/trends/post', (req, res) => {
    T.get("trends/place", { id: req.body.post }, function(err, data, response) {
        res.send(JSON.stringify(data))
    })
})

app.listen(port, () => console.log(`Listening on port ${port}`));