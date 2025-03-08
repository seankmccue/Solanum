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
                    <p>Jump right into urban gardeing with these simple, easy to follow tutorials!<br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cum veniam. <br/>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et dolores repellat. <br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, ab culpa.
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