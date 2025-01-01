"use client"
import { useState } from "react"
const DashboardPage = () => {
    const [name,setName]=useState("");
    console.log("Dashboard client componenet")
  return (
    <>
    <input onChange={e=>setName(e.target.value)} value={name}/>    
    <div>DashboardPage {name}</div>
    </>
  )
}

export default DashboardPage