import Card from './Card'
import { FaMobileAlt, FaDesktop, FaGamepad } from 'react-icons/fa'
import feedbackApp from '../../images/FeedbackApp.png'
import githubFinder from '../../images/GithubFinder.png'
import housingMarket from '../../images/HousingMarket.png'
import MERNSupportDesk from '../../images/MERNSupportDesk.png'
import questionMark from '../../images/NintendoQuestionMark.jpg'
import countingApp from '../../images/CountingApp.png'
import ageApp from '../../images/AgeInMinutesApp.png'
import calculatorApp from '../../images/BasicCalculatorApp.png'

function Projects() {
    return (
        <div className='projectContainer' id='projects'>
            <header>Projects</header>
            <main>
                <div className='webContainer'>
                    <div className='projectsHeader'>
                        <FaDesktop className='text-3xl md:text-5xl mx-2'/>
                        <h1 className='mx-2'>Web Developement</h1>
                    </div>
                    <div className='webCardContainer'>
                        <Card 
                            picture={feedbackApp}
                            projectName='Feedback UI'
                            projectDescription='A mock user feedback interface.'
                            website='https://awesome-beaver-2e320b.netlify.app/'
                            github='https://github.com/cornetj13/React-Feedback-App'
                            type='website'
                        />
                        <Card 
                            picture={githubFinder}
                            projectName='Github Finder'
                            projectDescription='A search tool for Github profiles (uses the Github API).'
                            website='https://react-git-hub-finder-app-gt2k0p2be-cornetj13.vercel.app/'
                            github='https://github.com/cornetj13/React-GitHubFinder-App'
                            type='website'
                        />
                        <Card 
                            picture={housingMarket}
                            projectName='House Marketplace'
                            projectDescription='A mock website for posting and searching house listings.'
                            website='https://react-housing-market-app.vercel.app/'
                            github='https://github.com/cornetj13/React-HousingMarket-App'
                            type='website'
                        />
                        <Card 
                            picture={MERNSupportDesk}
                            projectName='MERN Support Tickets'
                            projectDescription='A mock support ticket interface built using the MERN stack.'
                            website='https://cornetsupportdesk.herokuapp.com/'
                            github='https://github.com/cornetj13/MERN-SupportTicket-App'
                            type='website'
                        />
                        <Card 
                            picture={questionMark}
                            projectName='Find-a-Ride'
                            projectDescription='A website for connecting local taxi drivers and riders.'
                            website=''
                            github=''
                            type='websiteInProgress'
                        />
                        <Card 
                            picture={questionMark}
                            projectName='Food Truck Tracker'
                            projectDescription='A website for finding information about local food trucks.'
                            website=''
                            github=''
                            type='websiteInProgress'
                        />
                    </div>
                </div>
                <div className='appContainer'>
                    <div className='projectsHeader'>
                        <FaMobileAlt className='text-3xl md:text-5xl mx-2'/>
                        <h1 className='mx-2'>MOBILE APPS</h1>
                    </div>
                    <div className='cardContainer'>
                        <Card 
                            picture={countingApp}
                            projectName='Simple Counting App'
                            projectDescription='An app for keeping count. Made in Kotlin.'
                            website='#'
                            github='https://github.com/cornetj13/Kotlin-Basic-Counter-App'
                            type='app'
                        />
                        <Card 
                            picture={ageApp}
                            projectName='Age in Minutes App'
                            projectDescription='An app for calculating your age in minutes. Made in Kotlin.'
                            website='#'
                            github='https://github.com/cornetj13/Kotlin-Age-In-Minutes-App'
                            type='app'
                        />
                        <Card 
                            picture={calculatorApp}
                            projectName="Basic Calculator App"
                            projectDescription='A basic, easily broken calculator app. Made in Kotlin.'
                            website='#'
                            github='https://github.com/cornetj13/Kotlin-Basic-Calculator-App'
                            type='app'
                        />
                        <Card 
                            picture={questionMark}
                            projectName='Food Truck Tracker App'
                            projectDescription='An app for finding information about local food trucks. Made in Kotlin'
                            website='#'
                            github='#'
                            type='appInProgress'
                        />
                    </div>
                </div>
                <div className='unityContainer'>
                    <div className='projectsHeader'>
                        <FaGamepad className='text-3xl md:text-5xl mx-2'/>
                        <h1 className='mx-2'>UNITY GAMES</h1>
                    </div>
                    <div className='cardContainer'>
                        <Card 
                            picture={feedbackApp}
                            projectName='Spaceship Game'
                            projectDescription='Playing as a spaceship, the goal is to destroy enemies and collect crystals. Made in Unity.'
                            website='#'
                            github='#'
                            type='game'
                        />
                        <Card 
                            picture={questionMark}
                            projectName="'Minesweeper' Game"
                            projectDescription='A twist on the classic Minesweeper game. Made in Unity.'
                            website='#'
                            github='#'
                            type='gameInProgress'
                        />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Projects