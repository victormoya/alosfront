import React, { useRef, useState, useEffect } from "react"
import { Link } from "gatsby"
import { usePrevious } from "../hooks/usePrevious"

const Nav = ({ showSection }) => {
  const navRef = useRef()
  const prevDragging = usePrevious(dragging)

  const [dragging, setDragging] = useState(false)
  const [position, setPosition] = useState({ x: 12, y: 24 })
  const [positionRelative, setPositionRelative] = useState(null)

  useEffect(() => {
    if (dragging && !prevDragging) {
      document.addEventListener("mousemove", onMouseMove)
      document.addEventListener("mouseup", onMouseUp)
    } else if (!dragging && prevDragging) {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseup", onMouseUp)
    }
  }, [dragging, prevDragging, onMouseDown])

  const onMouseDown = e => {
    setDragging(true)
    const { offsetTop, offsetLeft } = navRef.current
    setPositionRelative({
      x: e.pageX - offsetLeft,
      y: e.pageY - offsetTop,
    })
    //e.stopPropagation()
    //e.preventDefault()
  }

  const onMouseUp = e => {
    setDragging(false)
    //e.stopPropagation()
    //e.preventDefault()
  }

  const onMouseMove = e => {
    if (!dragging) return
    setPosition({
      x: e.pageX - positionRelative.x,
      y: e.pageY - positionRelative.y,
    })
    //e.stopPropagation()
    //e.preventDefault()
  }

  return (
    <div
      ref={navRef}
      className="nav"
      onMouseDown={onMouseDown}
      style={{
        position: "fixed",
        right: position.x + "px",
        bottom: position.y + "px",
      }}
    >
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
}

export default Nav
