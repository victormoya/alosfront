import React from "react"
import { lorem } from "static/content.json"

const Section = ({ name, onClose }) => {
  const content = () => {
    if (name === "about") {
      return <p>{lorem}</p>
    }
    if (name === "contact") {
      return (
        <p>
          CONTACT.
          <br />
          <a
            className="no-link"
            href="mailto:contact@sebastianalos.com?subject=Hola Sebastian"
          >
            contactasebastianalos.com
          </a>
          <br />
          <a className="no-link" href="tel:34 637 791 910">
            34 637 791 910
          </a>
        </p>
      )
    }
  }

  return (
    <div className="section">
      <div onClick={onClose} className="close" />
      {content()}
    </div>
  )
}

export default Section
