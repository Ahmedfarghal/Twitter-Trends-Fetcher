import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var Twit = require('twit')

class App extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.fetchTwitter()
  }

  fetchTwitter() {

    //Callback functions
    var error = function (err, response, body) {
        console.log('ERROR [%s]', err);
    };
    var success = function (data) {
        console.log('Data [%s]', data);
    };

    var T = new Twit({
      consumer_key:         'hR8Ew7aaaWIdNPJFFI3mTyAPv',
      consumer_secret:      'treejdKGK0WGQJfnCdN3rpaI6tKPPIu7hna2OSR841MamXfXDI',
      access_token:         '2888180595-M7T0VQgObd74OTLaBwreZf6BPKJM1aN8iYgpCsX',
      access_token_secret:  '7Qsf2M5VNmsSTOKBXMafFi1BDHWMagy1SLsVtMOESJMOE',
      timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
      strictSSL:            true,     // optional - requires SSL certificates to be valid.
    })

    // var config = {
    //   "callBackUrl": "https://elharony.github.io/Twitter-Trend-Fetcher/"
    // id: '2888180595'
    // }

    T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
      console.log(data)
    })

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
