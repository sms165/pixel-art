import React, {useState} from 'react';
import {CirclePicker} from 'react-color';
import DrawingPanel from './DrawingPanel';

function Editor() {
    const [panel, setPanel] = useState(8);
    const [wPanel, setwPanel] = useState(8);
    const [hideOptions, setHideOptions] = useState(false);
    const [drawingPanel, setDrawingPanel] = useState(true);
    const [buttonText, setButtonText] = useState("Start");
    const [color, setColor] = useState("#f44336");

    function  initializeDrawingPanel() {
        setHideOptions(!hideOptions);
        setDrawingPanel(!drawingPanel);

        buttonText === "Start" ? setButtonText("reset") : setButtonText("Start");
        
    }

    function handleClick() {
        let ele= document.getElementsByName("selection");

        for (let i = 0; i < ele.length; i++) {
            if (ele[i].checked) {
                setPanel(ele[i].value)
                setwPanel(ele[i].value)
                
            }
            
            
        }
       
        
    }


    return (
        <div className='editor'>
            <h1> Pixel Drawing</h1>
            {drawingPanel && <h2>Pick canvas size</h2> }
            {drawingPanel && (<div className="options">
           <form>
                <div>
                <input type="radio" id="8" name="selection" className="radio-light" value="8"  onClick= {handleClick} />
                 <label for="8">8x8</label> 
                 
                <input type="radio" id="12" name="selection" className="radio-light" value="12" onClick= {handleClick} />
                <label for="12">12x12</label> 
                
                <input type="radio" id="16" name="selection" className="radio-light" value="16" onClick= {handleClick}  />
                <label for="16">16x16</label> 
                
                <input type="radio" id="32" name="selection" className="radio-light" value="32" onClick= {handleClick}  />
                <label for="32">32x32</label> 
            </div>
            </form>
            </div>)}
            
             {hideOptions && (<CirclePicker color={color} 
            onChangeComplete={ (color) => {setColor(color.hex)}}  />)}
            <br />
            
            {hideOptions && ( <DrawingPanel 
                panel= {panel}
                wPanel= {wPanel}
                color= {color}
            />)}
            
            <br />
            <button className="button" onClick={initializeDrawingPanel}>{buttonText}</button>

           
            </div>
       
    )
}

export default Editor
