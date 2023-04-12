import { Card, Button } from "react-bootstrap";
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    let options = {
      method: 'GET',
      headers: { 'x-api-key': 'XxnEuRBV/oxIKTKSdII2Zg==JDIxvDsQUIEdZ8CY' }
    }
    
    let url = 'https://api.api-ninjas.com/v1/quotes?category=humor'

    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
            data: json
        })
        console.log(json);
      });
  }

  render() {
    return (
      <div
      className="bg-dark"
      id="quote-box"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
      }}
    >
      <Card style={{ width: "18rem" }} border="primary">
        <Card.Body>
          <Card.Title id="text">"Quote"</Card.Title>
          <Card.Text id="author">author</Card.Text>
          <Button variant="primary" id="tweet-quote" target="_blank">
            Tweet
          </Button>
          <Button variant="primary" id="new-quote">
            New Quote
          </Button>
        </Card.Body>
      </Card>
    </div>
    )
  }
}
