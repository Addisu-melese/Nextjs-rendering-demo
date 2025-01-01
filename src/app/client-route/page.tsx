"use client"

import { ClientSideFunction } from "@/utils/client-utils";

//import { ServerSideFunction } from "@/utils/server-utils";

const ClientRoutePage = () => {
    console.log("Client side rendering");
    const client =ClientSideFunction();
   // const result=ServerSideFunction();
  return (
    <>
    
    <div>ClientRoutePage</div>
    {/* <p>{result}</p> */}
    <p>{client}</p>
    </>
  )
}

export default ClientRoutePage