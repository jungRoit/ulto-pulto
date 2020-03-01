import React from 'react';
import '../../style/index';
import Navbar from '../../component/Navbar/Navbar';

import {logo, mainImage} from '../../constants/images';

const Dashboard = props => (
  <div className="container">
    <div className="header">
      <div className="header-left">
      <div className="logo-wrapper">
        <a href={"#"} onClick={navigate('ROOT')} >
        <img src={logo} className="logo-img"/>
        </a>
      </div>
      </div>
      <div className="header-right">
        <Navbar
        navList={['Our Story', 'Our Songs', 'Song Stories', 'Contact Us']}
        onClick={navigate}
        />
      </div>
    </div>
    <div className="body">
      <div className="body-left">
        <div className="main-image-wrapper">
          <img src={mainImage} className="main-image" />
        </div>
      </div>
      <div className="body-right">

      </div>
    </div>
    <div className="footer">
      <h1>footer</h1>
    </div>
  </div>
);

const navigate = route => {
  //todo navigate to respective pages
}

export default Dashboard;
