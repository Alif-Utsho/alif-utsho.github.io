import React from 'react'
import { useLocation } from 'react-router-dom'

function LocationGen() {
    let location = useLocation()
    return (
        location.pathname
    )
}

export default LocationGen