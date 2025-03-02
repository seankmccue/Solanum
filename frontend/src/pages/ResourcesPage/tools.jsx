import Card from "../../components/Card/card.jsx"
import "./tools.css"
import can from '../../assets/can.avif'
import gloves from '../../assets/gloves.avif'
import hoe from '../../assets/hoe.avif'
import rake from '../../assets/rake.avif'
import shears from '../../assets/shears.avif'
import trowel from '../../assets/trowel.avif'


function Tools() {
    return (
        <>
            <div className="gallery">
                <Card
                    title="WATERING CAN"
                    image={can}
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