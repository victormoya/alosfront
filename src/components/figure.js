import React, { useState } from "react"
//import Img from "gatsby-image"

import { lorem } from "static/content.json"

const Figure = ({ src, alt }) => {
  const [showCaption, setShowCaption] = useState()
  return (
    <>
      <div className="figure" onClick={() => setShowCaption(true)}>
        <img src={src} alt={alt} />
      </div>
      {showCaption && (
        <div className="caption">
          <div onClick={() => setShowCaption(false)} className="close" />
          <p>{lorem}</p>
        </div>
      )}
    </>
  )
}

export default Figure
