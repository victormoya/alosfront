import React from "react"

const Topbar = () => {
  return (
    <header className="topbar">
      <div>
        <a href="/">Sebastian Alos</a>
      </div>
      <div>
        <a href="#">ENG</a>
        <span className="separator">/</span>
        <a href="#">ESP</a>
        <span className="separator">/</span>
        <a href="#">VAL</a>
      </div>
    </header>
  )
}

export default Topbar
