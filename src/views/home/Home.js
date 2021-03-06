import React from 'react';
import '../../style/index';
import Navbar from '../../component/Navbar/Navbar';

import {
  mainImage,
  facebook,
  instagram,
  youtube,
} from '../../constants/images';
import { FaSpotify, FaApple, FaAmazon } from 'react-icons/fa';

const Dashboard = (props) => (
  <div className="container">
    <div className="header">
      <div className="header-left">
        <div className="logo-wrapper">
          <button className="logo-link" onClick={navigate('ROOT')}>
            <h1 className="logo-text main-title">ULTO PULTO</h1>
          </button>
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
          <img src={mainImage} className="main-image"  alt="cover"/>
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
      <div className="footer-content">
        <div className="social-wrapper">
          <div className="social-icon-wrapper">
            <a href="https://www.facebook.com/ultopulto1/">
              <img src={facebook} className="social-icon" alt="facebook link" />
            </a>
          </div>
          <div className="social-icon-wrapper">
            <a href="https://www.instagram.com/ultopulto3/?hl=en">
            <img src={instagram} className="social-icon" alt="instagram link" />
            </a>
          </div>
          <div className="social-icon-wrapper">
            <a href="https://www.youtube.com/channel/UCzcEjVt3DHGUcb0zvyERUnw" >
            <img src={youtube} className="social-icon" alt="youtube link" />
            </a>
          </div>
        </div>
        Copyright © Ulto Pulto 2020.
      </div>
    </div>
  </div>
);

const navigate = (route) => {
  //todo navigate to respective pages
};

export default Dashboard;
