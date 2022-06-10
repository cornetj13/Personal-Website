import { useState } from 'react';
import Avatar from './Avatar';
import { FaArrowCircleLeft, FaExpand, FaUserGraduate, FaSuitcase, FaLanguage, FaCode } from 'react-icons/fa'

function Bio() {
    const [toggleBio, setToggleBio] = useState(false)

    return (
        <div className={toggleBio ? 'bioContainerToggled' : 'bioContainer'} id='home'>
            <div className={toggleBio ? 'bioProfileToggled' : 'bioProfile'}>
                <div>
                    <Avatar />
                </div>
                <div className={toggleBio ? 'bioStatsToggled' : 'bioStats'}>
                    <h2> <FaUserGraduate /> <h3>Double Major</h3> <p>Physics and Chinese Language</p> </h2>
                    <h2> <FaSuitcase /> <h3>2+ Years</h3> <p>Professional Experience</p> </h2>
                    <h2> <FaLanguage /> <h3>4 Languages</h3> <p>Fluent: English and French</p> <p>Limited: Spanish and Chinese</p> </h2>
                    <h2> <FaCode /> <h3>Multiple Programming Languages</h3> <p>Has Experience in 10+ Languages</p> </h2>
                </div>
            </div>
            <div className={toggleBio ? 'bioBodyToggled' : 'bioBody'}>
                <h1>Who is Jonathan Cornet?</h1>
                {!toggleBio ?
                        <p>I'm an avid programmer who has explored many of the wonderful fields of computer science. I come from a background in Physics, but discovered my passion for programming while finish my degree. I've dabbled in many areas, from unity game development, to computational modeling, to web development, and more. I'm always learning, always improving, and always coding!</p>
                    :
                        <>
                            <p>I have been interested in computers for as long as I can remember. I remember exploring different aspects of our home PC as a kid, such as the command prompt and the file explorer. I shared my own PC with my brother as a hand-me-down from my parents when I was still in middle school. From there, I spent a lot of time on the computer; I would play video games, browse the web, and do my schoolwork on it. I was part of the first generations to depend on a computer for all sorts of aspects of daily life and it inspired me to obtain a deeper understanding of how they really worked.</p>
                            <p>When I went to Western Washington University, I decided to study Physics for a general understanding of the world around me. I also like the freedom of choice in careers that an understanding of physics would provide. Luckily for me, the Physics program at WWU emphasised programming as a powerful tool. I also took some CS classes and I soon realized how much I enjoyed the programming aspects of my courses. Although I had many interesting classes, I enjoyed my class “Computational Physics” the most since it was the first time I had made programs that modeled real-world scenarios. I saw the power of combining an understanding of physics with a powerful computational model. I also enjoyed the visual aspect of presenting the data in a clear and easy to follow manner.</p>
                            <p>After college, I took a 2.5-year sabbatical in Paris, where I focused on seeing the world, improving my French, and experiencing a different culture. I had several interesting jobs during that time, from bartending to tour guiding, all of which helped me build different skills that stick with me today. People skills, clear communication, the power of a good narrative; these were all lessons I took during my time abroad.</p>
                            <p>During my last year in Paris, I began programming a lot in my free time for fun. At first, I was merely brushing up on my skills to ensure I did not lose the abilities I had gained during my time at university. However, I began learning new area to apply my programming skills and really enjoyed creating programs on my own. I learned how to use Python to infer information and trends in a data set. I learned how to make video games in Unity. I learned how to make apps that I could put on my phone and websites that I could visit from my friend’s computer. I realized that I really enjoyed the vast array of applications that a knowledge of programming could create.</p>
                            <p>At the end of 2019, I decided to pivot into Software Development as a career. I began looking for job opportunities and was lucky enjoy landing an entry level job as a Software Developer. I would work on computational models for an engineering company, just like the work I did in my favorite class from university.</p>
                            <p>Since then, I have been continuing to learn as much about the would of programming as I can. I continue to work on personal projects, take courses online, and engage with the community in order to master my skills and bring to life the projects and ideas I have in my head that can be realized through the power of technology.</p>
                        </>
                    }
                <button className='btn btn-collapse btn-block' onClick={() => setToggleBio(!toggleBio)}>
                    {!toggleBio ? 
                        <>
                            <FaExpand /> Expand
                        </>
                        :
                        <>
                            <FaArrowCircleLeft /> Collapse
                        </>
                    }
                </button>
            </div>
        </div>
    )
}

export default Bio