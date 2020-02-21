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
                    Object.keys(obj.buttons).map( (btnId, idx) => 
                    {
                        if ( btnId === btnChoice ) {
                        return <p className='chosenButton'>{obj.buttons[btnId]}</p>
                        } else 
                        {
                        return <p className='notChosenButton'>{obj.buttons[btnId]}</p>
                        }
                    }):
                    Object.keys(obj.buttons).map( (btnId, idx) => {
                        return <button key={idx} onClick={ (elm)=> { props.setNextStep(btnId)
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