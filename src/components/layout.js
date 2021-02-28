import React, { useState } from "react"
import PropTypes from "prop-types"
import { Topbar, Nav, Section } from "components"

const Layout = ({ children }) => {
  const [showSection, setShowSection] = useState(false)

  return (
    <>
      <Topbar />
      {showSection && (
        <Section name={showSection} onClose={() => setShowSection(false)} />
      )}
      <div className="layout">{children}</div>
      <Nav showSection={section => setShowSection(section)} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
