import React from 'react';
import axios from 'axios'
import GithubUserCard from './components/GithubUserCard'
import UserSearchBar from './components/UserSearchBar'
import './styles.scss'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      url: "",
      searchText: "",
      userInfo: {}
    }
  }

  componentDidMount(){
    this.setState({
      url: "https://api.github.com/users/caleb-barger"
    })
  }

  componentDidUpdate(prevProps, prevState){
    if (this.state.url !== prevState.url) {
      axios
      .get(this.state.url)
      .then(res => {
        this.setState({userInfo: res.data})
      })
      .catch(err => {
        console.log(err)
      })
    }
  }

  render(){
    return(
      <div>
        <UserSearchBar />
        <GithubUserCard userInfo={this.state.userInfo}/>
      </div>
      
    )
  }
}

export default App;
