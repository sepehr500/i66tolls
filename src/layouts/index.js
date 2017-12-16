import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.css'

const Header = () => (
  <div className={'header-container'} >
    <div className={'header'}>
      <h1>
          I66 tolls at a glance
      </h1>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <MuiThemeProvider>
  <div className={'main-container'}>
    <Helmet
      title="What's the toll on 66?"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
    <link href="https://fonts.googleapis.com/css?family=Roboto:300" rel="stylesheet"/>
    </Helmet>
    <Header/>
    <div className={"main"}>
      {children()}
    </div>
  </div>
  </MuiThemeProvider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
