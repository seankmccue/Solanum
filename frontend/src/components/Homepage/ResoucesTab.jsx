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
                <p>Learn more about the resources you'll need to get started and where you can buy them! <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cum veniam incidunt. <br/>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et dolores repellat molestias. <br/>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, ab culpa. Voluptates.
                </p>
                

            </div>
        </section>
        </Link>
        </>
    )
}

export default ResourcesTab; 