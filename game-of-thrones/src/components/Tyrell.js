import React, { Component } from 'react'
import axios from 'axios'

 class Tyrell extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      data: []
    }
  }

  componentDidMount() {
    
    axios.get("http://anapioficeandfire.com/api/characters/16")
    .then(res => {
      const bTyrell = res.data;
      console.log("data ---->", bTyrell)
      
      this.setState({data: bTyrell})

    })
    .catch(error => {
      console.log('there is an error', error)
    })

  }


  render() {
    return (
      <div>
        <h1> Where was Margaery Tyrell born? </h1>
        <ul>
          {this.state.data.born}
        </ul>
      </div>
    )
  }
}

export default Tyrell;