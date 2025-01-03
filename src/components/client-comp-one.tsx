"use client"
import { useState } from "react"
import ServerComponenetOne from "./server-comp-one"

const ClientComponentOne = ({children}:{children:React.ReactNode}) => {
    const [name,setName]=useState("Addisu")
  return (
    <div>
      <h1>ClientComponentOne</h1>{
        children
      }
    </div>
  )
}

export default ClientComponentOne