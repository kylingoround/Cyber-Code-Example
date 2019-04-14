import React from 'react'
import PropTypes from 'prop-types'
// import Helmet from 'react-helmet'
// import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

// import Topnav from './topnav'
import TopnavCon from '../redux/containers/TopnavCon'

const LayoutPizza = styled.div`
  ${'' /* margin: '0 auto'; */}
  ${'' /* padding: '0'; */}
  ${'' /* height: auto; */}
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  position: absolute;
  background-color: #000000;
  color: white;
`

const Layout = ({ children }) => (
  <LayoutPizza>
    <TopnavCon/>
    {children}
  </LayoutPizza>


)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
