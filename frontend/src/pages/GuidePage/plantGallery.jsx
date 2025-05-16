import PlantGalleryCard from "../../components/Card/plantGalleryCard.jsx"

import "./plantGallery.css"

function PlantGallery() {
    return (
        <>         
            <div className="guideGallery">
                <div className="houseplants">
                    <h1 className="galleryTitle">HOUSEPLANTS</h1>
                    <a href="https://www.youtube.com/watch?v=0CvjNNCv5_s">
                        <PlantGalleryCard
                        title="MONSTERA"
                        text1="☀️ Bright, indirect light"
                        text2="⏱️ 5–10 years, often longer with good care"
                        text3="💧 Water when top 1–2 inches of soil is dry"
                        />
                    </a>
                    <a href="https://www.youtube.com/watch?v=OComSHxFHxg">
                        <PlantGalleryCard
                        title="POTHOS"
                        text1="☀️ Low to bright, indirect light"
                        text2="⏱️ 5–10 years"
                        text3="💧 Water when soil is mostly dry"
                        />
                    </a>
                    <a href="https://www.youtube.com/watch?v=kKc_3w51DZg">
                        <PlantGalleryCard
                        title="ZZ PLANT"
                        text1="☀️ Low to medium, indirect light"
                        text2="⏱️ 5+ years"
                        text3="💧 Allow soil to completely dry between waterings"
                    />
                    </a>   
                </div>
                <div className="veggies">
                    <h1 className="galleryTitle">FRUITS/VEGGIES</h1>
                    <a href="https://www.youtube.com/watch?v=9w-7RoH_uic">
                        <PlantGalleryCard
                            title="TOMATOES"
                            text1="☀️ Full sun (6–8 hours daily)"
                            text2="⏱️ Annual (single growing season)"
                            text3="💧 Keep soil consistently moist, not soggy"
                        />
                    </a>
                    <a href="https://www.youtube.com/watch?v=uVU1lZxC-RQ">
                        <PlantGalleryCard
                            title="STRAWBERRIES"
                            text1="☀️ Full sun (6+ hours)"
                            text2="⏱️ 2–4 years depending on variety"
                            text3="💧 1–1.5 inches of water per week"
                        />
                    </a>
                    <a href="https://www.youtube.com/watch?v=kfTr9nYogW8">
                        <PlantGalleryCard
                            title="GREEN ONION"
                            text1="☀️ Full sun to partial shade"
                            text2="⏱️ Several months, can regrow from base"
                            text3="💧 Keep soil evenly moist"
                        />
                    </a>    
                </div>
                <div className="beginnerFriendly">
                    <h1 className="galleryTitle">BEGINNER FRIENDLY</h1>
                    <a href="https://www.youtube.com/watch?v=Y4cl-IDqM_M">
                        <PlantGalleryCard
                            title="CACTUS"
                            text1="☀️ Bright direct sunlight"
                            text2="⏱️ 10–200 years (varies by species)"
                            text3="💧 Water sparingly; allow soil to dry completely"
                        />
                    </a>
                    <a href="https://www.youtube.com/watch?v=f8nsXcxySig">
                        <PlantGalleryCard
                            title="SUCCULENT"
                            text1="☀️ Bright, indirect to direct light"
                            text2="⏱️ 3–10 years"
                            text3="💧 Water when soil is fully dry"
                        />
                    </a>
                    <a href="https://www.youtube.com/watch?v=LYQcwc-dfVo">
                        <PlantGalleryCard
                            title="GREEN BEANS"
                            text1="☀️ Full sun (6–8 hours)"
                            text2="⏱️ Annual (harvest within 50–60 days)"
                            text3="💧 1 inch of water per week"
                        />
                    </a>
                </div>
            </div>
        </>
    )
}

export default PlantGallery;
