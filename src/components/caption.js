import React from "react"

const Caption = ({ content, onClose }) => {
  return (
    <div className="explanation">
      <div onClick={onClose} className="close" />
      <p>{content}</p>
    </div>
  )
}

export default Caption
