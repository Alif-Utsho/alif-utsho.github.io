import React from 'react'
import { useParams } from 'react-router-dom'

function Namegenerate() {
    let {name} = useParams()
    return (
        <h2 className="title display-2 mb-4">
            {name ? name : 'Sizukaa'}
        </h2>
    )
}

export default Namegenerate