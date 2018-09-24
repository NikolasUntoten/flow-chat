import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';

var config = {
	apiKey: 'AIzaSyDhrQdnHqEI3LVG2veiT0GNAnVEz0NJslY'
	authDomain: 'flow-chat-800fc.firebaseapp.com'
	databaseURL: 'https://flow-chat-800fc.firebaseio.com/'
	storageBucket: 'gs://flow-chat-800fc.appspot.com'
};
firebase.initializeApp(config);
var storage = firebase.storage();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro animated infinite shake">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
