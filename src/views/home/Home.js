import React from 'react';
import '../../style/index';
import Navbar from '../../component/Navbar/Navbar';

import {logo, mainImage, coverImage} from '../../constants/images';

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
          <img src={coverImage} className="main-image" />
        </div>
      </div>
      <div className="body-right">
        <div className="content-header">
          <h1 className="content-title">Welcome to ULTO PULTO</h1>
        </div>
        <div className="content-body">
          <p className="content-p">

          </p>
        </div>
      </div>
    </div>
    <div className="footer">
      <div className="footer-body">
          <div className="footer-body-title-wrapper">
          <h1 className="content-title">Listen Now</h1>

          </div>
      </div>
    </div>
  </div>
);

const navigate = route => {
  //todo navigate to respective pages
}

export default Dashboard;
