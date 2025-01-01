import React from 'react'

const StreamingThree = async() => {
  await new Promise((resolve)=>setTimeout(resolve,4000))
  return (
    <div>Streaming Three 4 sec</div>
  )
}

export default StreamingThree