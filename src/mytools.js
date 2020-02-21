
export  const LettersFilter= (txt)=> {
  var newTxt=txt;
  var counter=0;
  var dictionary = {
    "ש":0
  }
  
  if (txt[0]=="ש") {
    newTxt = txt.slice(1); 
  }
  return newTxt;
}

export const buildSyntax = (questions, currentQ, txt) => {
  if ( 'ref' in currentQ ) 
  {         
      currentQ.ref.map((elm,refCount) => 
      {
          let reference = currentQ.ref [ refCount ];
          for (let qNumber in questions) {
            if ( reference === questions[qNumber].title ) { //if reference word matches title
              let foundAnswer = questions[qNumber].answer;
              txt = txt.replace(reference, foundAnswer);
          }
          }
      })
  }
  return txt;
}

export const applyCss=(questions,  currentQ, txt)=> {

  if ( "css" in currentQ )
    {
      for ( let masterKey in currentQ.css ) 
      {
        let subKey = Object.keys(currentQ[ "css" ][ masterKey] )[0] ;
        for (let keyIndex in currentQ[ "css" ][ masterKey][subKey])
        {
          let key = Object.keys(currentQ[ "css" ][ masterKey][subKey][keyIndex])[0];
          let value = currentQ[ "css" ][ masterKey][subKey][keyIndex][key];
          txt = txt.replace(key, (`<span style="${subKey}:${value}">${key}</span>`)) ;
        }
      }
  }
   txt = txt.toString().replace(/__/g,'<br>');
  return txt;
}


export const textTransform=(obj,  currentQ, txt, includeMirror)=> {
//  console.log(txt);
  if ( includeMirror === true) { 
    return mirror(buildSyntax(obj,  currentQ, applyCss(obj,  currentQ, txt)));
  } else
  return buildSyntax(obj,  currentQ, applyCss(obj,  currentQ, txt));
}

export const mirror = ( text ) => 
{
  var dictionary = {
    "בזבזתי": "בינכם",
        "בינינו": "בינכם",
        "ביני" : "בינך",
        "אחרי" : "אחרייך",
        "בינינו" : "בינכם",
        "אני רוצה" : "",
        "בגלל ש": "",
        "בעקרון": "",
        "אני": "את/ה",
        "שאני": "שאת/ה",
        "לי": "לך",
        "מטרתי": "מטרתך",
        "בי": "בך",
        "בשבילי": "בשבילך",
        "כשאני": "כשאת/ה",
        "שלי": "שלך",
        "ואני": "ואת/ה",
        "נתאהב": "תתאהבו",
        "פני": "פניך",
        "אצלי": "אצלך",
        "אותי": "אותך",
        "להכיר": "תכירי/י",
        "איתי": "איתך",
        "שאני": "שאת/ה",
        "מרגישה": "",
        "ושאני": "ושאת/ה",
        "כרצוני": "כרצונך",
        "הרגשתי": "הרגשת",
        "כדי": "",
        "בשביל": "",
        "לקחתי": "לקחת",
        "מעצמי": "מעצמך",
        "שבי": "שבך",
        "שניפגש": "להיפגש",
        "אתקבל": "תתקבל/י",
        "שאוכל": "שתוכל/י",
        "ממני": "ממך",
        "אדע": "תדע/י",
        "כי": "",
        "בגלל": "",
        "בעצמי": "בעצמך",
        "עלי": "עליך",
        "כדי": "",
        "ארגיש": "תרגיש/י",
        "אהיה": "תהי/ה",
        "לרגלי" : "לרגלייך",
        "הייתי": "היית",
        "שהייתי": "שהיית",
        "נעשיתי": "נעשית",
        "נעשיתי": "נעשית",
        "עצמי": "עצמך",
        "לעצמי": "לעצמך",
        "אלי": "אליך",
        "שאדע": "לדעת",
        "שיהיה לי": "",
        "שתיהיה לי": "",
        "cat" : "dog",
        "chair" : "table"
      };
      var multiDict = {
        "ערך עצמך": "ערך עצמי",

        "ביטחון עצמך": "בטחון עצמי",
        "בטחון עצמך": "בטחון עצמי",

      };
      // text = LettersFilter(text);
      var count = 0 ;
      var newSyntax = text ;
      var words = text.match(/([\u0590-\u05fe]+)|([^\u0590-\u05fe]+)/gi);
  var optimized_syntax = "";

  if ( words != null)
  {
      for ( var word of words )
      {
 
        for ( let dict in dictionary )
        {
          
          if ( word == dict ) 
          {
            words [ count ] = dictionary [ dict ] ;
         
          }
        }
        count++;
      }

      for (let i in words) {
            //re assemble optimized syntax
            if (words[i] != "") {
              optimized_syntax += words[i] + "";
            }
          }
          
          // optimized_syntax = optimized_syntax.slice(0, -1); //remove last space
          //multiple words pass
          var sentence = optimized_syntax ;
          
          for (let i in multiDict)
          {
            optimized_syntax = sentence.replace(i,multiDict[i]);
            sentence = optimized_syntax ;
          }
          return optimized_syntax;
        }
}

export const findTitle=(questions, title)=> 
{
  for ( let i = 0 ; i < questions.length ; i++ )
  {
      if (questions[i].title === title ) {
        return i;
      } 
      
    }
    


}
