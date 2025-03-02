import React from "react";
import { Link } from "react-router-dom";
import './HomepageTabs.css'
import tutorialsImage from '../../assets/sandie-clarke-q13Zq1Jufks-unsplash.jpg';

function TutorialsTab(){
    return(
        <>
        <Link to="/guide">
        <div className="homepage-tabs">
            <div className='text-left'>
                <h3>TUTORIALS:</h3>
                <p>Jump right into urban gardening with these simple, easy to follow 
                    tutorials!
                </p>
            </div>
        </div>
        <img id='tutorials' src={tutorialsImage}/>
        </Link>
        </>
    )
}

export default TutorialsTab; 