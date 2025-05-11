import React from "react";
import { Link } from "react-router-dom";
import './HomepageTabs.css'
import resourcesImage from '../../assets/kaufmann-mercantile-a7Woj8W6J0s-unsplash.jpg';

function ResourcesTab(){
    return(
        <>
        <Link to="/resources">
        <section className="homepage-tabs">
            {
                <div className="tab-images">
                    <img src={resourcesImage} alt="Pot and gloves" />
                </div>
            }
            <div className='text-right'>
                <h3>RESOURCES:</h3>
                <p>Discover all the essential tools and materials you'll need to begin your gardening journey <br/>
                with confidence. From soil and seeds to pots and watering cans, we’ll help you understand <br/>
                what each item is for and why it matters. You’ll also find recommendations for where to buy <br/>
                supplies. Knowing what to get and where to find it can save you time and make starting out <br/>
                much easier. With the right resources, you'll be ready to dig in and start growing! </p>
                

            </div>
        </section>
        </Link>
        </>
    )
}

export default ResourcesTab; 