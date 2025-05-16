import Card from "../../components/Card/card.jsx"

import "./tools.css"
import watercan from '../../assets/watering-can.gif'
import trowel from '../../assets/trowel.gif'
import gloves from '../../assets/gloves.gif'
import hoe from '../../assets/hoe.png'
import rake from '../../assets/rake.gif'
import shears from '../../assets/shears.gif'


function Tools() {
    return (
        <>
            <div className="gallery">
                <Card
                    title="WATERING CAN"
                    image={watercan}
                    text="Watering cans are useful in helping you control the amount 
                            of water you provide to your plants."
                />

                <Card
                    title="TROWEL"
                    image={trowel}
                    text="Trowels are a versatile tool for transporting small plants,
                            displacing soil or removing weeds."
                />

                <Card
                    title="GLOVES"
                    image={gloves}
                    text="Gloves are crucial for protecting your hands from pokes 
                            and pricks."
                />

                <Card
                    title="PRUNING SHEARS"
                    image={shears}
                    text="Pruning shears can be used to cut branches and stems."
                />

                <Card
                    title="HOE"
                    image={hoe}
                    text="Hoes are versitile and can be to weed, harvest and 
                            move soil."
                />

                <Card
                    title="RAKE"
                    image={rake}
                    text="Rakes can be used to move loose matter such as leaves or
                            even light weeding."
                />
            </div>
            

        </>
    )
}

export default Tools;