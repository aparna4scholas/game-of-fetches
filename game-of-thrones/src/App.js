import React, { Component } from 'react'
import './App.css';
import Tyrell from './components/Tyrell'
import Lannister from './components/Lannister'
import Taragaryen from './components/Targaryen'
import Baratheon from './components/Baratheon'
import Robert from './components/Robert'
import Founder from './components/Founder'


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      data: []
    }
  }


  render() {
    return (
      <div>
        <h1> Game of Thrones Characters  </h1>
        
      </div>
    )
  }
}