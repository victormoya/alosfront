import React from "react"
import { Link } from "gatsby"

const Topbar = () => {
  return (
    <header className="topbar">
      <div>
        <Link to="/">Sebastian Alos</Link>
      </div>
      <div>
        <Link to="/">ENG</Link>
        <span className="separator">/</span>
        <Link to="/">ESP</Link>
        <span className="separator">/</span>
        <Link to="/">VAL</Link>
      </div>
    </header>
  )
}

export default Topbar
