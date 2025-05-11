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
                <p>Check out one of the community gardens on campus where you can connect with other <br/>
                beginners who share an interest in gardening. It’s a great place to exchange tips, ask <br/>
                questions, and learn from more experienced growers. Whether you’re starting with herbs, <br/>
                vegetables, or flowers, you’ll find guidance and encouragement every step of the way. Plus, <br/>
                it’s a relaxing and rewarding way to spend time outdoors and build new friendships. Don’t <br/>
                worry if you’re new—everyone starts somewhere! </p>
            </div>
        </section>
        </Link>
        </>
    )
}

export default LocateTab; 