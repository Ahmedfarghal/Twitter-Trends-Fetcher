import React, { Component } from 'react'
import './App.css'

class App extends Component {

  state = {
    response: '',
    post: ''
  }

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
      .catch(err => console.log(err))
  }

  callApi = async () => {
    const response = await fetch('/api/trends/get')
    const body = await response.json()
    if (response.status !== 200) throw Error(body.message)
    return body
  }

  handleSubmit = async e => {
    e.preventDefault()
    const response = await fetch('/api/trends/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    })
    const body = await response.text()
    if (response.status !== 200) throw Error(body.message)
    this.updateTrends(body)
  }

  updateTrends = (newTrends) => {
    
    // Parse Data [STRING into JSON]
    const parsedData = JSON.parse(newTrends)
    const trends = parsedData["0"]["trends"]

    // State Management
    this.setState({ response: newTrends })

    // Show Data
    this.showData(trends)
  }

  showData = (trends) => {
    const dataTable = document.querySelector("#datashow")

    // Clear current data
    dataTable.innerHTML = ""

    // Fill it with trends
    trends.map(trend => {

      // Create Row & Columns
      const row = document.createElement("tr")
      const col_trendName = document.createElement("td")
      const col_trendVolume = document.createElement("td")

      // Fill them with data
      col_trendName.innerHTML = `<a href='${trend.url}'>${trend.name}</a>`
      col_trendVolume.innerText = trend.tweet_volume

      // Append Children
      row.appendChild(col_trendName)
      row.appendChild(col_trendVolume)
      dataTable.appendChild(row)
      
    })
  }



render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Country WOEID: <a href="http://woeid.rosselliot.co.nz/lookup/">Search for your country!</a></strong><br/><i>Default: Set to "1" as Global</i>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>

        <table id="datashow"></table>
        
      </div>
    );
  }
}
export default App;