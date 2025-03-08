import React from "react";
import { Link } from "react-router-dom";
import './HomepageTabs.css'
import locateImage from '../../assets/photo-1656139789536-3e5eb7db1845.avif';

function LocateTab(){
    return(
        <>
        <Link to="/locate">
        <section className="homepage-tabs">
            {
                <div className="tab-images">
                    <img src={locateImage} alt="Library Walk" />
                </div>
            }
            <div className='text-right'>
                <h3 id="locate-title">LOCATE A GARDEN:</h3>
                <p>Find a garden on campus to meet other beginners, get advice, and learn to grow new things! <br/>
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

export default LocateTab; 