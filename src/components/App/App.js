import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import BusinessList from '../BusinessList/BusinessList'
import SearchBar from '../SearchBar/SearchBar'
import Yelp from '../../util/Yelp'
import Footer from '../Partials/Footer'
import Background from '../SearchBar/Background';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy)
    .then((businesses) => {
      this.setState({
        businesses: businesses
      })
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Ravenous</h1>
        <Background>
          <SearchBar searchYelp={this.searchYelp}/>
        </Background>
        <BusinessList businesses={this.state.businesses}/>
        <Footer/>
      </div>
    )
  }
}

export default App;
