import fs from 'fs'
import ServerComponentTwo from './server-comp-two'
const ServerComponenetOne = () => {
    fs.readFileSync("src/components/server-comp-one.tsx","utf-8")
  return (
    <div>
        <h1>ServerComponenetOne</h1>
        <ServerComponentTwo/>
    </div>
  )
}

export default ServerComponenetOne