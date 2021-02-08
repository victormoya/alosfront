import React from "react"
import PropTypes from "prop-types"
import Nav from "./nav"

const Layout = ({ children, seo }) => {
  return (
    <div>
      {children}
      <Nav></Nav>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
