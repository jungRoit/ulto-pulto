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
              <a href='#' onClick={() => {this.props.onClick(item)}}>
                <li className='nav-item'>{item}</li>
              </a>
            );
          })}
        </ul>
      </div>
    );
  }
}
