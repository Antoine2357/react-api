import React, { Component } from 'react';
import './App.css';
import  Generatequote  from  './cont/Generatequotes';
import  Displayquote  from  './cont/Displayquote';
import samplequote from "./cont/quote"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // on peut mettre notre sampleEmployee par défaut
      // afin d'avoir toujours un employé d'affiché
      quote:  samplequote
    };
  }

  getQuote() {
    // Récupération de l'employé via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=5")
      .then(response  =>  response.json())
      .then(data  => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          quote:  data[0],
        });
    });
}
  render() {
    return (
      <div className="App">
        <Generatequote  selectquote={() =>  this.getQuote()}  />
        <Displayquote  quote={this.state.quote}  />
      </div>
    );
  }
}

export default App;
