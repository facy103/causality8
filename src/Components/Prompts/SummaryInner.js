import React, { useState, Fragment}  from 'react';
import "./Summary.css"
import SummaryImg from './summary.svg';
import Design from '../Design/Design.js';
import {textTransform} from '../../mytools.js';

const separator = {
    marginTop: '30px',
    backgroundColor: '#606373',
    height: 1
}

const RenderWishDB=(DB,totalIdx) => {
    return (
        <Fragment>
        <div>
            תשובותיך עד כה:
        </div>
         <br></br>
  
         {DB.map((wish, idx) =>
        {
            if ( idx > 0 && idx < DB.length) 
            {
             return (
                    <div key={idx+totalIdx}>
                        <div><i className="fas fa-long-arrow-alt-down innerArrow"></i></div>
                        <div className='innerWish'>{wish}</div>
                    </div>
             )}
         else
             {
   
                return (
                    <div key={idx+totalIdx}>
                        <div className='innerWish'>{wish}</div>
                    </div>)
            }
          }
   
      
    )}
    </Fragment>
        )
}

const SummaryInner = ( props ) => {
    const wishDB = [...props.wishDB] ;
    const [alreadyAnswered, setAnswerState] = useState(false);
    const obj = props.obj;
    const terminalOutput = props.terminalOutput;

    return (
        <div className='prompt'>
                <div className='summaryContainer'>
                     <img src={SummaryImg} alt="SummaryImg" />
                     <span className='Summarytitle'>
                     <Design path={props.path} questionCount={props.questionCount} 
                        botMessege={textTransform(terminalOutput, obj, props.h1, true)}/>
                     </span>
ּ    
                </div>
                    
                        {RenderWishDB(wishDB, props.idx)}
        
                  {/* {WishDB} */}
      

             <div style={separator}></div>
            <div className='clickableTextContainer'>
            {alreadyAnswered ?
                    <button 
                                              className="clickableText">
                                                  <i className="fas fa-chevron-down fa-3x"></i>
                    </button> :
                 <button onClick={ ()=> { props.setNextStep('a')
                            setAnswerState(true);
                        
                         }}
                                                  className="clickableText">
                                                      <i className="fas fa-chevron-down fa-3x"></i>
                        </button>
                    
                }
                
            </div>
           
        </div>

    )
}

export default SummaryInner;