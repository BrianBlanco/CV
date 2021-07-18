import React from 'react'

// Import json with all the translations
import idioma from '../../lenguajes.json'


// About Me page
export default function aboutMe(props) {

    return (
        <div id="aboutMe">
            <h1>{idioma[props.language].pageTitle.aboutMe}</h1>

             <div className="menuPhotos">
                <img src={require("../../images/gato.jpg")} alt="Profile" className="profilePicture" />
                <div>
                    Caption of the photo
                </div>
            </div>
            <div>
                Personal Data
            </div>

            <div>
                IDKY
            </div>
        </div>
    )
}
