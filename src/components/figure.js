import React from "react"
//import Img from "gatsby-image"

const Figure = ({ src, alt }) => {
  return (
    <>
      <div className="figure">
        <img src={src} alt={alt} />
      </div>
    </>
  )
}

export default Figure
