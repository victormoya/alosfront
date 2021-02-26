import React from "react"

const Explanation = ({ text }) => {
  return (
    <div className="explanation">
      <a href="#" class="close"></a>
      <p>{text}</p>
    </div>
  )
}

export default Explanation
