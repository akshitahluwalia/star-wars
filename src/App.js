import React, { Component } from 'react';
import PlanetList from './containers/planet_list';
import './App.css';
import searchTermChanged from './actions/search_term_changed'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      term: "" 
    }
  }

  handleInputChanged(term){
    this.setState = { term };
    this.props.searchTermChanged(term) 
  }
  render() {
    return(
      <div className="container" id="mainContent">
        <div className="row">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Search an amazing planet to live..."
            value={ this.props.term }
            onChange={ event => this.handleInputChanged(event.target.value) } /> 
        </div>
        <div className="row" id="secondary">
          <PlanetList />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return({
    term: state.term
  });
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    searchTermChanged: searchTermChanged
  },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
