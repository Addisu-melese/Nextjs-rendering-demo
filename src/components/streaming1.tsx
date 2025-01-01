import React from 'react'

const Streamingtwo = async() => {
  await new Promise((resolve)=>setTimeout(resolve,2000))
  return (
    <div>Streaming two after 2sec</div>
  )
}

export default Streamingtwo