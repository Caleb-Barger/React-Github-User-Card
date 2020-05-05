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
        console.log("Something went wrong defaulting to prev user...")
        this.setState({url: prevState.url})
      })
    }
  }

  updateSearchText = textBoxValue => {
    this.setState({
      searchText: textBoxValue
    })
  }

  findUser = () => {
    this.setState({
      url: `https://api.github.com/users/${this.state.searchText}`,
      searchText: ""
    })
  }

  render(){
    return(
      <div className="wrapper">
        <UserSearchBar 
          searchText={this.state.searchText} 
          updateSearchText={this.updateSearchText}
          findUser={this.findUser}
        />
        <GithubUserCard userInfo={this.state.userInfo}/>
      </div>
      
    )
  }
}

export default App;
