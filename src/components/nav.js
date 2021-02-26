import React from "react"

const Nav = () => (
  <div className="nav">
    <div className="entry">
      <div>
        <a href="/">work</a>
      </div>
      <div className="sections">
        <div>
          <a href="/">all</a>
        </div>
        <div>
          <a href="/graphic">graphic</a>
        </div>
        <div>
          <a href="/product">product</a>
        </div>
        <div>
          <a href="/other">other</a>
        </div>
      </div>
    </div>
    <div>
      <a href="/about">about</a>
    </div>
    <div>
      <a href="/news">news</a>
    </div>
    <div>
      <a href="/contact">contact</a>
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
