import React, {useRef} from 'react';
import { exportComponentAsJPEG } from 'react-component-export-image';
import '../App.css';
import Row from './Row';

function DrawingPanel(props) {
    const {panel, wPanel, color} =props

    const panelRef = useRef()

    let rows = [];

    for (let i = 0; i < panel; i++) {
        rows.push(<Row key={i} wPanel={wPanel} color={color} />)
        
    }

    return (
        <div className="drawingPanel">
        <div className="pixels" ref={panelRef}>
            {rows}
        </div>
        <button onClick={()=> exportComponentAsJPEG(panelRef)} className="button">
            Download
        </button>
        </div>
    )
}

export default DrawingPanel
