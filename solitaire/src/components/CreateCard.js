import React from 'react'
import { useState } from 'react'

function CreateCard({ card }) {

    const [ isVisible, setIsVisible ] = useState(true)

    return (
         <div class="card" id={card}>
             <p>{card}</p>
         </div>
    )
}

export default CreateCard
