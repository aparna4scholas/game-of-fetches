import React, { Component } from 'react'
import axios from 'axios'

 class Targaryen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      data: []
    }
  }

  componentDidMount() {
    
    axios.get("http://www.anapioficeandfire.com/api/houses/378")
    .then(res => {
      const hTargaryen = res.data;
      console.log("data ---->", hTargaryen)
      
      this.setState({data: hTargaryen})

    })
    .catch(error => {
      console.log('there is an error', error)
    })

  }


  render() {
    return (
      <div>
        <h1> What region is House Targaryen in? </h1>
        <ul>
          {this.state.data.region}
        </ul>
      </div>
    )
  }
}

export default Targaryen;