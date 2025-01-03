import ClientComponentOne from '@/components/client-comp-one'
import ServerComponenetOne from '@/components/server-comp-one'
import React from 'react'

const InterLeaving = () => {
  return (
    <div>
        <h1>InterLeaving</h1>
        <h2>To call server componenet nested inside client componenet is throw an error 
        to solve this we have to pass it as children </h2>
        <ClientComponentOne>          
          <ServerComponenetOne/>        
        </ClientComponentOne>
    </div>
  )
}

export default InterLeaving