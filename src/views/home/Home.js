import React from 'react';
import '../../style/index';
import Navbar from '../../component/Navbar/Navbar';

import { logo, mainImage, coverImage } from '../../constants/images';
import { FaSpotify, FaApple, FaAmazon } from 'react-icons/fa';

const Dashboard = (props) => (
  <div className="container">
    <div className="header">
      <div className="header-left">
        <div className="logo-wrapper">
          <a href={'#'} onClick={navigate('ROOT')}>
          <h1 className="logo-text main-title">ULTO PULTO
          </h1>
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
        <div className="content">
        <div className="content-header">
          <h1 className="content-title">
            <span className="welcome-text">Welcome To</span>{' '}
            <span className="logo-text">ULTO PULTO</span>
          </h1>
        </div>
        <div className="content-body">
          <p className="content-p"></p>
        </div>
        <div className="icon-box">
            <div className="icon-wrapper">
              <a href="https://music.apple.com/us/artist/ulto-pulto/1161366757">
              <FaApple size={24} />
              </a>
            </div>
            <div className="icon-wrapper">
              <a href="https://open.spotify.com/artist/4dID0kQSdL2JCYw4lMM61e?si=1U1fRHO5RpCEYsvIFw9PFg">
              <FaSpotify size={24} />
              </a>
            </div>
            <div className="icon-wrapper">
              <a href="https://www.amazon.com/Ulto-Pulto/dp/B01LYPXLK7">
              <FaAmazon size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer">
      <div className="footer-body">
        <div className="footer-body-title-wrapper">
          
        </div>
      </div>
    </div>
  </div>
);

const navigate = (route) => {
  //todo navigate to respective pages
};

export default Dashboard;
