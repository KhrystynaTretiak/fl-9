import React, { Component } from 'react';
import { render } from 'react-dom';

// Entry point for styles
import './scss/index.scss';

// Get the root node
const rootNode = document.querySelector('#root');

// Entry point for the application

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      isLoading: false,
      play: false,
      pause: true
    };
  }

  play() {
    this.setState({
      play: true,
      pause: false
    });
    this.refs.player.play();
  }

  pause() {
    this.setState({ play: false, pause: true });
    this.refs.player.pause();
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch('https://fl-homework-api.firebaseio.com/mozart.json')
      .then(response => response.json())
      .then(data => this.setState({ hits: data, isLoading: false }));
  }

  render() {
    const { hits } = this.state;


    return (
      
      <div className="container">
        <div>
         
        </div>
        <div>
        {hits.map(hit =>
          <div className="player" key={hit.id}>
            <i onClick={this.play.bind(this)} class="material-icons"> 
            <audio ref="player"><source src={hit.mp3} /></audio> play_arrow </i>
            <i onClick={this.pause.bind(this)} class="material-icons"> pause </i>
            <div> <p>{hit.title}</p>
              {hit.author}</div>
            <i class="material-icons">
              favorite </i>
            

          </div>)}
        </div>
      </div>
      );
  }
}

render(
  <App />,
  rootNode,
);
