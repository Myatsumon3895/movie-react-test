import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './index.css';

class Sidebar extends Component {

  render () {

   

    return (
      <div className="App-sidebar">
        <ul className="sidebar-menu">
          <li className="sidebar-menu__item">
            <NavLink exact={true} to="/popular" activeClassName="is-active">
              Popular
            </NavLink>
          </li>
          <li className="sidebar-menu__item">
            <NavLink exact={true} to="/top-rated" activeClassName="is-active">
              Top Rated
            </NavLink>
          </li>
          <li className="sidebar-menu__item">
          <NavLink exact={true} to="/upcoming" activeClassName="is-active">
             Upcoming
            </NavLink>
          </li>
          
          <li className="sidebar-menu__item sidebar-menu__item--coming-soon">
            <NavLink exact={true} to="/now-playing" activeClassName="is-active">
              Now Playing
            </NavLink>
          </li>
        </ul>
        
      </div>
    );
  }

}

export default Sidebar;
