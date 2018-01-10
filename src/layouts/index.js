import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import './index.scss';
import image from './I66.png';
import fb from './Facebook.svg';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  shareButton = () => (
    <ul className="share-buttons">
      <li>
        <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fshoulditakei66.today&quote=shoulditakei66" title="Share on Facebook" target="_blank">
          <img className="icon-style" alt="Share on Facebook" src={fb} />
        </a>
      </li>
    </ul>)

  render() {
    return (
      <div className="header-container" >
        <AppBar
          title="Should I take I66?"
          className="app-header"
          onLeftIconButtonClick={this.handleToggle}
          iconElementRight={<FlatButton label="share" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fshoulditakei66.today&quote=shoulditakei66" />}
        />
        <Drawer
          onRequestChange={open => this.setState({ open })}
          open={this.state.open}
          docked={false}
        >
          <MenuItem containerElement={<Link to="/" />} onClick={this.handleClose}>Home</MenuItem>
          <MenuItem containerElement={<Link to="/analytics/" />} onClick={this.handleClose}>Analytics</MenuItem>
          <MenuItem containerElement={<Link to="/about/" />} onClick={this.handleClose}>About</MenuItem>
        </Drawer>
      </div>);
  }
}

const TemplateWrapper = ({ children }) => (
  <MuiThemeProvider>
    <div className="main-container">
      <Helmet
        title="Should I take I66"
        meta={[
        { name: 'description', content: 'I66 Toll Viewer' },
        { name: 'keywords', content: 'I66, Toll, Time' },
      ]}
      >
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:300" rel="stylesheet" />
      </Helmet>
      <Header />
      <div className="main">
        {children()}
      </div>
    </div>
  </MuiThemeProvider>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
