import React from 'react'

function Decrease({ cnt, setCnt }) {
  return (
    <button onClick={() => setCnt(cnt - 1)}>-</button>
  )
}

export default Decrease