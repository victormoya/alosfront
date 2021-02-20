import React from "react"

import "./styles.scss"

const Nav = () => {
  return (
    <div className="menu">
      <div className="row">
        <div className="col-left">
          <a href="#">work</a>
        </div>
        <div className="col-right">
          <div>
            <a href="#">all</a>
          </div>
          <div>
            <a href="#">graphic</a>
          </div>
          <div>
            <a href="#">product</a>
          </div>
          <div>
            <a href="#">other</a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-left">
          <div>
            <a href="#">about</a>
          </div>
          <div>
            <a href="#">news</a>
          </div>
          <div>
            <a href="#">contact</a>
          </div>
          <div>
            <a href="#">instagram</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
