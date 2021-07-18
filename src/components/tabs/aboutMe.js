import React from 'react'

export default function aboutMe() {

    return (
        <div id="aboutMe">
             <div className="menuPhotos">
                <img src={require("../../images/gato.jpg")} alt="Profile photo" className="profilePicture" />
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
