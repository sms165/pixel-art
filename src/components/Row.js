import React from 'react';
import Pixel from './Pixel';
import '../App.css';

function Row(props) {
    const {wPanel, color} =props
    let pixels=[];

    for (let i = 0; i < wPanel; i++) {
        pixels.push(<Pixel key={i} color={color} />)
        
    }
    return (
        <div className="row">
            {pixels}
        </div>
    )
}

export default Row
