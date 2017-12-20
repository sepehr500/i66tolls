import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import './index.scss';
import image from './I66.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div className="header-container" >
        <AppBar
          title="Should I take I66?"
          className="app-header"
          onLeftIconButtonClick={this.handleToggle}
        />
        <Drawer
          onRequestChange={open => this.setState({ open })}
          open={this.state.open}
          docked={false}
        >
          <MenuItem containerElement={<Link to="/" />} onClick={this.handleClose}>Home</MenuItem>
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
