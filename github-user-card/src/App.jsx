import React from 'react';
import './styles.scss'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      url: "https://api.github.com/users/caleb-barger",
      searchText: "",
    }
  }

  componentDidMount(){

  }

  render(){
    return(
      null
    )
  }
}

export default App;
