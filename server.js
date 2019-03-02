const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Twitter Fetch
var trends = "NO DATA"
updateTrends = (newTrends) => {
    this.trends = newTrends
    console.log(this.trends)
}



twitterFetch = async () => {
    var Twit = require('twit')
    var T = new Twit({
        consumer_key: "hR8Ew7aaaWIdNPJFFI3mTyAPv",
        consumer_secret: "treejdKGK0WGQJfnCdN3rpaI6tKPPIu7hna2OSR841MamXfXDI",
        access_token: "2888180595-M7T0VQgObd74OTLaBwreZf6BPKJM1aN8iYgpCsX",
        access_token_secret: "7Qsf2M5VNmsSTOKBXMafFi1BDHWMagy1SLsVtMOESJMOE",
        timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
        strictSSL: true // optional - requires SSL certificates to be valid.
    });

    T.get("trends/place", { id: 1, count: 2 }, function(err, data, response) {
        console.log(JSON.stringify(data))
        app.get('/api/hello', (req, res) => {
            res.send({express: JSON.stringify(data)})
        });
    });
}

twitterFetch()

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));