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
    
    axios.get("")
    .then(res => {
      const recipes = res.data.results;
      console.log("recipes ---->", recipes)
      
      this.setState({data: recipes})

    })
    .catch(error => {
      console.log('there is an eror', error)
    })

  }


  render() {
    return (
      <div>
        <h1> Spoonacular API </h1>
        <ul>
          {this.state.data.map((recipe, id) => <li key={id}> {recipe.title} </li>)}
        </ul>
      </div>
    )
  }
}