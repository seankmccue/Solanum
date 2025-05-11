import React from "react";
import { Link } from "react-router-dom";
import './HomepageTabs.css'
import tutorialsImage from '../../assets/sandie-clarke-q13Zq1Jufks-unsplash.jpg';

function TutorialsTab(){
    return(
        <>
        <Link to="/guide">
        <section className="homepage-tabs">
            
                    
            <div className='text-left'>
                <h3>TUTORIALS:</h3>
                    <p>Jump right into urban gardening with these simple, easy-to-follow tutorials <br/>
                    designed for beginners. Whether you have a balcony, windowsill, or small  <br/>backyard, 
                    you’ll learn how to make the most of your space. Each guide breaks <br/>down the basics— 
                    from choosing containers and soil to planting and maintenance—  <br/>so you can start growing 
                    with confidence.
                    </p>
        
            </div>
            {
                <div className="tab-images">
                    <img src={tutorialsImage} alt="Hands in soil" />
                </div>
            }
        </section>
        </Link>
        </>
    )
}

export default TutorialsTab; 