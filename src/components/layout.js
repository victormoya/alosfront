import React from "react"
import PropTypes from "prop-types"
import { Topbar, Nav } from "components"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Topbar />
      {children}
      <Nav />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
