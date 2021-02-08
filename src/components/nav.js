import React, { useEffect } from "react"
import Hammer from "hammerjs"
import "./styles.scss"

const Nav = () => {
  useEffect(() => {}, [])

  return (
    <div id="menu">
      <div class="row">
        <div class="col-left">
          <a href="#">work</a>
        </div>
        <div class="col-right">
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
      <div class="row">
        <div class="col-left">
          <div>
            <a href="#">about</a>
          </div>
          <div>
            <a href="#">news</a>
          </div>
          <div>
            <a href="#">contact</a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-left"></div>
        <div class="col-right">
          <div>
            <a href="#">instagram</a>
          </div>
          <div>
            <a href="#">behance</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
