import React from 'react';
import './style.css';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='navbar'>
        <ul className='nav-list'>
          {this.props.navList.map(item => {
            return (
              <button className="navbar-link" onClick={() => {this.props.onClick(item)}}>
                <li className='nav-item'>{item}</li>
              </button>
            );
          })}
        </ul>
      </div>
    );
  }
}
