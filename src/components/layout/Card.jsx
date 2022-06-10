import { useState } from 'react'
import Popup from '../Popup'
import spaceGame from '../../images/SpaceCrawlerGame.png'

function Card({ picture, projectName, projectDescription, website, github, type }) {
    const [buttonPopup, setButtonPopup] = useState(false)

    return (
        <div className='cardBody card shadow-md compact'>
            <div className='flex-row items-center space-x-4 card-body'>
                <img src={picture} alt='Website Snapshot' className='rounded-full cardPicture'/>
                <div>
                    <h2>{projectName}</h2>
                    <p>{projectDescription}</p>
                        {type==='website' ?
                            <>
                                <span>Website:  </span>
                                <a target="_blank" rel="noopener noreferrer" className='webLink' href={website}>{projectName}</a>
                                <br />
                                <span>Github:  </span>
                                <a target="_blank" rel="noopener noreferrer" className='gitLink' href={github}>{projectName}</a>
                            </>
                            : type==='websiteInProgress' ?
                            <>
                                <span>Work in Progress!</span>
                            </>
                            : type==='app' ?
                            <>
                                {/* <span>Screen Shot:  </span>
                                <a target="_blank" rel="noopener noreferrer" className='webLink' href={website}>{projectName}</a>
                                <br /> */}
                                <span>Github:  </span>
                                <a target="_blank" rel="noopener noreferrer" className='gitLink' href={github}>{projectName}</a>
                            </>
                            : type==='appInProgress' ?
                            <>
                                <span>Work in Progress!</span>
                            </>
                            : type==='game' ?
                            <>
                                <span>Screen Shot:  </span>
                                <button className='webLink' onClick={() => setButtonPopup(true)}>{projectName}</button>
                            </>
                            : type==='gameInProgress' ?
                            <>
                                <span>Work in Progress!</span>
                            </>
                            :
                            <>
                            </>
                        }
                </div>
            </div>
            <Popup trigger={buttonPopup} picture={spaceGame} setTrigger={setButtonPopup}>
            </Popup>
        </div>
    )
}

export default Card