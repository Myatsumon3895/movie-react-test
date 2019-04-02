import React, { Component } from 'react';

import SearchBar from '../../components/SearchBar';

import Sidebar from '../../components/Sidebar';


import './index.css';

class Header extends Component {

  constructor() {
    super()
    this.state = {
      userMenuOpen: false
    }
  }

  toggleUserMenu = () => {
    this.setState({
      userMenuOpen: !this.state.userMenuOpen
    })
  }

  render () {

    return (
      <div className="App-header">     
      <div className="amovie">All movies</div>   
      <SearchBar /> 
      <Sidebar
        filters={this.state.filters}
        updateFilters={this.updateStateWithFilters}
        resetFilters={this.resetFilters}
      />     
      </div>
    );
  }
}

export default Header;
