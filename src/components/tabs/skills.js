import React from 'react'

// Import json with all the translations
import idioma from '../../lenguajes.json'

export default function skills(props) {



    return (
        <div id="skills" >
            <h1>{idioma[props.language].pageTitle.skills}</h1>

        </div>
    )
}
