import React, { Component } from 'react';
import questions from './DB/perfectDB';

let path = 0;
let questionCount = 0;
let questionCountStore = [0];
let procsessedQuestion = '';

const buildNextQuestionSyntax = () => {
    let currentQ = questions [ path ][ questionCount ];
    procsessedQuestion = currentQ.question;
    if ( 'ref' in currentQ ) 
    {     
        for ( let refCount in currentQ.ref ) 
        {
          for (let indexPath in questions )
          {
            let reference = currentQ.ref [ refCount ];
            for (let b in questions[indexPath] ) {
              if ( reference == questions[indexPath][b].title ) {
                let foundAnswer = questions[indexPath][b].answer;
                let newSyntax = procsessedQuestion.replace(reference, foundAnswer);
                procsessedQuestion = newSyntax; //replace
            }
            }
        }
        }
       //questions[path][questionCount].ref.push(ua);  //store new value in .ref
        if ( 'questions' in currentQ ) {
            currentQ.questions.map((elm,idx )=> {
            procsessedQuestion = elm;
            for ( let refCount in currentQ.ref ) 
            {
              let reference = currentQ.ref [ refCount ];
              for (let indexPath in questions )
              {
                for (let questionsIdx in questions[indexPath] ) {
                  if ( reference == questions[indexPath][questionsIdx].title ) {
                    let foundAnswer = questions[indexPath][questionsIdx].answer;
                    let newSyntax = procsessedQuestion.replace(reference, foundAnswer);
                    procsessedQuestion = newSyntax; //replace
                }
                }
            }
            }
            questions[path][questionCount].questions[idx]  = procsessedQuestion;
          });
        }

    }
    questions[path][questionCount].question = procsessedQuestion ;
  }

  export default buildNextQuestionSyntax;