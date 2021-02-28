import React from "react"
import { Link } from "gatsby"

const Nav = ({ showSection }) => (
  <div className="nav">
    <div className="entry">
      <div>
        <Link to="/">work</Link>
      </div>
      <div className="sections">
        <div>
          <Link to="/">all</Link>
        </div>
        <div>
          <Link to="/">graphic</Link>
        </div>
        <div>
          <Link to="/">product</Link>
        </div>
        <div>
          <Link to="/">other</Link>
        </div>
      </div>
    </div>
    <div>
      <Link to="/" onClick={() => showSection("about")}>
        about
      </Link>
    </div>
    <div>
      <Link to="/news">news</Link>
    </div>
    <div>
      <Link to="/" onClick={() => showSection("contact")}>
        contact
      </Link>
    </div>
    <div>
      <a
        href="https://www.instagram.com/sebastianalos/"
        target="_blank"
        rel="noreferrer"
      >
        instagram
      </a>
    </div>
  </div>
)

export default Nav
