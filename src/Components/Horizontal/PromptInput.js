import React, {useState} from 'react';
import './Horizontal.css';
import questions from '../../DB/perfectDB.js';
import Design from '../Design/Design.js';
import {textTransform} from '../../mytools.js';



const green = {
    borderBottom: "solid 1px #5ECC74"
}

const blue = {
    borderBottom: "solid 1px #0491FF"
}

const PromptInput = (props) => {
    const obj = props.obj;
    const terminalOutput = props.terminalOutput;
 
    const [isAnswered,setAnswerState] = useState(false)
    const txtSubmit = (e) => {
        if (e.keyCode == 13 && e.shiftKey == false) {
            console.log('test');
            e.preventDefault();
            setAnswerState(true);
            props.txtSubmit(e, props.ph)
          }
        }
    let mirror = true;
    if ('mirror' in obj ) {
        mirror = obj.mirror;
    };
    return (
        <div className='prompt'>
            <div >
                <Design botMessege={props.botMessege} />
            </div>
            <textarea 
                style={isAnswered ? blue : green}
                autoFocus rows="1" placeholder={props.ph} autoComplete="off" className="promptResponse" 
                onKeyDown={(event)=>{
                    txtSubmit(event)
                   }}
                />
        </div>
    )
}

export default PromptInput;