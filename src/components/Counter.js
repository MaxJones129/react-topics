"use client"

import React, { useState } from "react"
import PropTypes from "prop-types"

export default function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount)

  const updateCount = (method) => {
    if (method === "add") {
      setCount((prevState) => prevState + 1)
    } else if (method === "sub") {
      setCount((prevState) => prevState - 1)
    }
  }

  return (
    <div>
      <h1>Counter:</h1>
      <h4>{count}</h4> 
      <button type="button" onClick={() => updateCount("add")}>+</button>
      <button type="button" onClick={() => updateCount("sub")}>-</button>
    </div>
  )
} 

Counter.propTypes = {
  initialCount: PropTypes.number.isRequired,
}
