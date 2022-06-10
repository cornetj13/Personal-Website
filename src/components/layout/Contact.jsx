import { Link } from "react-router-dom"
import { useState } from 'react'

function Contact() {
    const [message, setMessage] = useState('')

    const onChange = (e) => {
        setMessage(e.target.value)
    }

    return (
        <div className='contactContainer' id='contact'>
            <header>Contact</header>
            <div className='contactInfoContainer'>
                <div className='linksContainer'>
                    <div className='gitHubContainer'>
                        <h2>GitHub: </h2>
                        <a target="_blank" rel="noopener noreferrer" className='gitHubLink' href='https://github.com/cornetj13'>Jonathan Cornet's GitHub</a>
                    </div>
                    <div className='linkedInContainer'>
                        <h2>LinkedIn: </h2>
                        <a target="_blank" rel="noopener noreferrer" className='linkedInLink' href='https://www.linkedin.com/in/jonathan-cornet-95a64b21a/'>Jonathan Cornet's LinkedIn</a>
                    </div>
                </div>
                <div className='emailContainer'>
                    <p className='emailMessage'>Write me an email with your information and any questions you might have: </p>
                    <textarea   
                        name="message" 
                        id="message" 
                        className='textarea' 
                        value={message} 
                        onChange={onChange}
                    ></textarea>
                    <a href={`mailto:cornetj2@gmail.com?Subject=${"Message from Personal Website"}&body=${message}`} className='btn btn-collapse btn-block'>
                        <button type='button'>Send Email</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact