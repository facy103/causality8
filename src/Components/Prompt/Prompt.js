import React, {useContext, useState, useEffect, Component} from 'react';
import './Prompt.css';
import questions from '../../DB/perfectDB.js';
import Design from '../Design/Design.js';
import {textTransform, textTransformMirror, searchTitle} from '../../mytools.js';
import {MyContext, MyConsumer} from '../../Contexts.js';



const Prompt=(props) => {
    const [alreadyAnswered, setAnswerState] = useState(false);
    const [response, setResponse] = useState('');
    const [btnChoice, getBtnChoice] = useState(null);
    const questionCount = useContext(MyContext);
    const terminalOutput=props.terminalOutput;  
    const obj = props.obj;
    let messege = props.botMessege;

        return (
                <div className='prompt'>
                       
                <Design path={props.path} 
                        questionCount={props.questionCount} 
                        obj={obj}
                        botMessege={props.botMessege}/>
                <div className='clickableTextContainer'>
                {alreadyAnswered ?
                    Object.keys(obj.buttons).map( (btnId) => 
                    {
                        if ( btnId === btnChoice ) {
                        return <button className='chosenButton'>{obj.buttons[btnId]}</button>
                        } else 
                        {
                        return <button className='notChosenButton'>{obj.buttons[btnId]}</button>
                        }
                    }):
                    Object.keys(obj.buttons).map( (btnId, idx) => {
                        return <button key={idx} onClick={ ()=> { props.setNextStep(btnId)
                            getBtnChoice(btnId);
                            setAnswerState(true);
                            setResponse(obj.buttons[btnId]);
                         }}
                                                  className="clickableText">
                        {obj.buttons[btnId]}
                        </button>
                    })
                }
                </div>
            </div>
    )
}

// Prompt.contextType = MyContext;


   
export default Prompt;