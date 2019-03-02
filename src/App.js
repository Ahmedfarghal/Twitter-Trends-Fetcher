import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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

    var config = {
      "consumerKey": "hR8Ew7aaaWIdNPJFFI3mTyAPv",
      "consumerSecret": "treejdKGK0WGQJfnCdN3rpaI6tKPPIu7hna2OSR841MamXfXDI",
      "accessToken": "2888180595-M7T0VQgObd74OTLaBwreZf6BPKJM1aN8iYgpCsX",
      "accessTokenSecret": "7Qsf2M5VNmsSTOKBXMafFi1BDHWMagy1SLsVtMOESJMOE",
      "callBackUrl": "https://elharony.github.io/Twitter-Trend-Fetcher/"
    }

    var TwitApp = require('twitter-node-client').Twitter;

    var twitter = new TwitApp(config);

    twitter.getTweet({ id: '2888180595'}, error, success);
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
