import React, { useContext, useState, useEffect} from 'react';
import './style.css';
import Footer from "./Components/Footer/Footer.js"
import Prompt from "./Components/Prompt/Prompt.js"
import PromptInput from "./Components/Horizontal/PromptInput.js"
import SummaryInner from "./Components/Prompts/SummaryInner.js"
import questions from './DB/perfectDB';
import {MyProvider, MyContext, MyConsumer} from './Contexts';
import {findTitle, textTransform} from './mytools.js';


let questionCount = 0 ;
let questionCountStore = [0];
let wishDB = [];
let newOutput = [questions[0]];

const chatDivRef = React.createRef();
const chatContainerRef = React.createRef();

const App = () => {

const [terminalOutput,setTerminalOutput] = useState([questions[0]]);

useEffect( ()=>{
  scrollBottom();
})

const scrollBottom = () => {
  let chatDivHeight = chatDivRef.current.clientHeight;
  chatContainerRef.current.scrollTop = chatDivHeight;
}

const txtSubmit = (e, ph) => {
  if (e.keyCode == 13 ) {
      e.preventDefault();
      if (e.target.value=='') {e.target.value=ph};
      questions[questionCount].answer = e.target.value;
      setNextStep();
    }
  }

  const setIndex = (value) =>
  {
    let currentQ = questions[questionCount];

    if ("wishDBUpdate" in currentQ) {
      wishDB.push(questions[questionCount].answer);
    }
    if ("swap" in currentQ) {
        for ( let swapRef in currentQ.swap )
        {     
          var swapObj = questions [ questionCount ].swap ;
          var sourceValue = findTitle ( questions, swapRef);
          var targetValue = findTitle ( questions, swapObj [ swapRef ] );
      
          //console.log(`replace ${questions [ sourceValue ].answer} with ${questions [ targetValue ].answer}`);
          questions [ sourceValue ].answer = questions [ targetValue ].answer ;
          // console.log(textTransform(questions, questions[questionCount], questions[5].question, true));
          //console.log(`Now: ${questions [ sourceValue ].answer}=${questions [ targetValue ].answer}`)
          // console.log(terminalOutput);
        }
    }

    if ('goto' in currentQ ) {
      questionCount = findTitle (questions,currentQ.goto);
      return;
    }

    if ('next' in currentQ) {
      questionCount = findTitle (questions, currentQ.next[value]);
      return;
    }  

    questionCount ++ ;
  }

  const setNextStep=(value)=> {
    setIndex(value);
    let obj = questions[questionCount]; 
    let mirror = true;
    if ( obj.mirror == false ) { mirror=false; }
    questionCountStore.push(questionCount);
    newOutput = [...terminalOutput];
    newOutput.push({...questions[questionCount]});
    if ('h1' in newOutput[newOutput.length-1])
    {
      console.log('h1 found');
    }

    newOutput[newOutput.length-1].question = textTransform(questions, obj, obj.question, mirror);
    setTerminalOutput(newOutput);
  }

  const generateStep =()=> {
    return terminalOutput.map ( ( obj, index )=> {
         switch ( obj.dialogeType ) {
        case "prompt":
            return <Prompt 
            key={index}
            botMessege={obj.question}
            setNextStep={(value)=>setNextStep(value)}
            obj={obj}
            terminalOutput={terminalOutput}
            />
            break;
        case "horizontal":  
            return <PromptInput 
            key={index}
            botMessege={obj.question}     
            txtSubmit={(e, ph)=>txtSubmit(e, ph)}
            ph={obj.placeholder}
            obj={obj}
            terminalOutput={terminalOutput}
            />
            break;
        case "summaryInner":
            return <SummaryInner 
            key={index}
            idx={index}
            botMessege={obj.question}
            h1={obj.h1}
            setNextStep={(value)=>setNextStep(value)}
            wishDB={wishDB}
            obj={obj}
            terminalOutput={terminalOutput}
            />
            break;
          default:
            break;
        }
      })
    }

    return (
      <MyContext.Provider value={questionCountStore[questionCount]}>
 
        <div id="mypage">
        <div ref={chatContainerRef}id="chatContainer">
            <div ref= {chatDivRef} id="chatDiv"> 
              {generateStep()}
            </div>  
        </div>
        <Footer setNextStep={setNextStep}/>

    </div>

    </MyContext.Provider>
)
}

export default App;