import React, { useState, useEffect } from 'react'

// Import json with all the translations
import idioma from '../../lenguajes.json'

// Import menu css
import './css/menu.css'

export default function Menu(props) {

    return (
        <div id="menu">
            <h1>{idioma[props.language].pageTitle.menu}</h1>
        </div>
    )
}
