import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    response: [],
    post: '',
    responseToPost: '',
  };

  componentDidMount() {
    this.callApi()
      .then(res => {

        // Parse Data [STRING into JSON]
        const parsedData = JSON.parse(res.express)
        const trends = parsedData["0"]["trends"]

        // State Management
        this.setState({ response: res.express })

        // Show Data
        this.showData(trends)

      })
      .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };


  showData = (trends) => {
    const dataTable = document.querySelector("#datashow")

    trends.map(trend => {

      // Create Row & Columns
      const row = document.createElement("tr")
      const col_name = document.createElement("td")
      const col_url = document.createElement("td")
      const col_tweetVolume = document.createElement("td")

      // Fill them with data
      col_name.innerText = trend.name
      col_url.innerText = trend.url
      col_tweetVolume.innerText = trend.tweet_volume

      // Append Children
      row.appendChild(col_name)
      row.appendChild(col_url)
      row.appendChild(col_tweetVolume)
      dataTable.appendChild(row)
      
    })
  }



render() {
    return (
      <div className="App">

        <table id="datashow">
        </table>

        <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}
export default App;



/*

[  
  { 
    "trends":[  
        {  
          "name":"Sergio Ramos",
          "url":"http://twitter.com/search?q=%22Sergio+Ramos%22",
          "promoted_content":null,
          "query":"%22Sergio+Ramos%22",
          "tweet_volume":55501
        },
        {  
          "name":"#OhMyDad",
          "url":"http://twitter.com/search?q=%23OhMyDad",
          "promoted_content":null,
          "query":"%23OhMyDad",
          "tweet_volume":null
        },
        {  
          "name":"#BernieInBrooklyn",
          "url":"http://twitter.com/search?q=%23BernieInBrooklyn",
          "promoted_content":null,
          "query":"%23BernieInBrooklyn",
          "tweet_volume":41189
        }
    ],

    "as_of":"2019-03-02T21:46:46Z",
    "created_at":"2019-03-02T21:45:47Z",
    "locations":[  
        {  
          "name":"Worldwide",
          "woeid":1
        }
    ]
  }
]


*/