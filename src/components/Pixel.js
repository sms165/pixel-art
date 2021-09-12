import React, {useState} from 'react'
import '../App.css';

function Pixel(props) {
    const {color} = props;
    const [pixelColor, setPixelColor] = useState("#fff");


    function applyColor(){
        setPixelColor(color);
    }

    return (
        <div className="pixel" style={{backgroundColor:pixelColor}} onClick={applyColor}>
            
        </div>
    )
}

export default Pixel
