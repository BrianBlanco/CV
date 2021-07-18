import React, { useRef, useState, useEffect } from 'react'

// Import tabs
import Menu from './tabs/Menu'
import Skills from './tabs/skills'
import AboutMe from './tabs/aboutMe'

// Import json with all the translations
import idioma from '../lenguajes.json'

// Import font icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'


// Import main css and css for all files
import './main.css'
import './general.css'

// Page that loads all the pages
export default function Main() {

    // Contains the current page (0, 1, 2, 3)
    const [currentPage, setCurrentPage] = useState(0);

    // Check if is the first time the user loads the page
    const [onLoad, setOnLoad] = useState(true);

    // Contains the actual language
    const [language, setLanguage] = useState("spanish");

    // Local referente to get Main DOM
    const mainRef = useRef()

    // Create initial parallax from the menu
    const parallax = useRef()

    // Moves to a new page when the user clicks on an arrow
    useEffect(() => {
        mainRef.current.scrollTo({ left: window.screen.width * currentPage, behavior: "smooth" })

        console.log(currentPage);

        // Add event listener
        document.addEventListener("mousemove", parallax);
        const elem = document.querySelector("#parallax");
        // Magic happens here
        function parallax(e) {
            let _w = window.innerWidth / 2;
            let _h = window.innerHeight / 2;
            let _mouseX = e.clientX;
            let _mouseY = e.clientY;
            let _depth1 = `${50 + (_mouseX - _w) * 0.01}% ${50 + (_mouseY - _h) * 0.01}%`;
            let _depth2 = `${50 + (_mouseX - _w) * 0.02}% ${50 + (_mouseY - _h) * 0.02}%`;
            let _depth3 = `${50 + (_mouseX - _w) * 0.06}% ${50 + (_mouseY - _h) * 0.06}%`;
            let x = `${_depth3}, ${_depth2}, ${_depth1}`;
            elem.style.backgroundPosition = x;
        }
    })

    return (
        <div id="main" ref={mainRef}>
            <div id="mainPages">
                <div id="parallax" ref={parallax}>
                    {onLoad &&
                        <div className="wrapper">
                            <div className="link_wrapper">
                                <a onClick={() => { setOnLoad(false); setCurrentPage(currentPage + 1) }}>{idioma[language].onLoadButton}</a>
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                                        <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    }
                </div>

                <Menu language={language} />
                <AboutMe language={language} />
                <Skills language={language} />

            </div>

            <div id="scrollButtons">

                {currentPage !== 1 && currentPage !== 0 &&
                    <FontAwesomeIcon className="left" icon={faArrowLeft} size="3x" onClick={() => setCurrentPage(currentPage - 1)} />
                }
                {currentPage !== 3 && currentPage !== 0 &&
                    <FontAwesomeIcon className="right" icon={faArrowRight} size="3x" onClick={() => setCurrentPage(currentPage + 1)} />
                }

            </div>
            <div className="languageFlags">

                <img src={require("../images/spanishFlag.png")} alt="Spanish" onClick={() => setLanguage("spanish")} className={language === "spanish" && "highlighted"}></img>
                <img src={require("../images/englishFlag.png")} alt="English" onClick={() => setLanguage("english")} className={language === "english" && "highlighted"}></img>
            
            </div>
        </div>
    )
}
