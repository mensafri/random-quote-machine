import { Card, Button } from "react-bootstrap";
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: "",
      author: "",
    };
  }

  componentDidMount() {
    let options = {
      method: "GET",
      headers: { "x-api-key": "XxnEuRBV/oxIKTKSdII2Zg==JDIxvDsQUIEdZ8CY" },
    };

    let url = "https://api.api-ninjas.com/v1/quotes?category=humor";

    fetch(url, options)
      .then((res) => res.json()) // parse response as JSON
      .then((response) => {
        this.setState({
          quote: response[0].quote,
          author: response[0].author,
        });
      })
      .catch((err) => {
        console.log(`error ${err}`);
      });
  }

  changeQuote = () => {
    let options = {
      method: "GET",
      headers: { "x-api-key": "XxnEuRBV/oxIKTKSdII2Zg==JDIxvDsQUIEdZ8CY" },
    };

    let url = "https://api.api-ninjas.com/v1/quotes?category=humor";

    fetch(url, options)
      .then((res) => res.json()) // parse response as JSON
      .then((response) => {
        this.setState({
          quote: response[0].quote,
          author: response[0].author,
        });
      })
      .catch((err) => {
        console.log(`error ${err}`);
      });
  };

  render() {
    return (
      <div className="bg-dark container-fluid d-flex justify-content-center align-items-center" style={{
        overflow: "hidden",
        height: "100vh",
      }}>
        <div className="row text-center d-flex align-items-center" id="quote-box">
          <Card style={{ width: "25rem" }}>
            <Card.Body>
              <Card.Title id="text">"{this.state.quote}"</Card.Title>
              <Card.Text id="author">{this.state.author}</Card.Text>
              <Button
                variant="secondary"
                id="new-quote"
                className="mr-5"
                onClick={this.changeQuote}
              >
                New Quote
              </Button>
              <a
                variant="primary"
                id="tweet-quote"
                className="ml-5"
                href="twitter.com/intent/tweet"
                target="_top"
              >
                Tweet
              </a>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}
