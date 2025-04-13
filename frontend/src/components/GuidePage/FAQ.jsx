import "./FAQ.css"

function FAQ () {
    return (
        <>
        <div className="faq-container">
            <details>
                <summary>Is gardening easy?</summary>
                
                <p>Yes! While gardening requires some effort and learning, it's not inherently difficult, 
                    especially for beginners, and is a rewarding hobby.<br/> Starting with easy-to-grow plants 
                    like the ones listed above and small spaces can make the initial experience more manageable.</p>
            </details>

            <details>
                <summary>How often should I water?</summary>

                <p> Watering depends on several factors, including the type of plant, soil, weather, and your 
                    location. Generally, for most plants, watering <br/>every other day to once a week is sufficient, 
                    but it's crucial to check the soil moisture and adjust accordingly.</p>
            </details>

            <details>
                <summary>What does partial shade mean?</summary>

                <p> Partial shade in gardening typically means a location that receives 3 to 6 hours of direct 
                    sunlight per day. This is less sunlight than full<br/> sun, but more than full shade. Plants that 
                    thrive in partial shade often do well in areas with morning sun or early afternoon sun, and 
                    some <br/>relief from the intense heat of the late afternoon. </p>
            </details>

            <details>
                <summary>Is mulch the same as compost?</summary>

                <p> No, mulch and compost are not the same. Compost is decomposed organic matter that is 
                    worked into the soil to improve its structure and<br/> provide nutrients. Mulch is any material 
                    spread on top of the soil to retain moisture, suppress weeds, and regulate soil temperature. 
                    While <br/>compost can be used as a mulch, mulch is not always compost. </p>
            </details>
        </div>
        
        </>
    )
}

export default FAQ; 