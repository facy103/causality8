const 
questions = 
[   {
  "title": "{המציאות}",
  "question": "בתור התחלה, האם הינך מרוצה בשלמות מהמציאות?",
  "dialogeType": "prompt",
  "buttons": { "a": "לא", "b": "כן" },
  "next": { "a": "{2המציאות}", "b": "{סיימת}" },
  "answer": ""
}, 
 {
  "title": "{סיימת}",
  "question": "ברכות!",
  "dialogeType": "prompt",
  "buttons": { "a": "מהתחלה"},
  "next": { "a": "{המציאות}"},
  "answer": "",
  "css": [{"color":[{"ברכות!":"#ffba01"}]}]
}, 
  {
    "title": "{2המציאות}",
    "question": "ממה אינך מרוצה?",
    "dialogeType": "horizontal",
    "placeholder": "המציאות",
    "answer": ""
  },
  {
    "title": "{רצון1}",
    "question": "מה רצונך בקשר לכך?",
    "dialogeType": "horizontal",
    "placeholder": "הרצון",
    "answer": "",
    "wishDBUpdate": true
  },
  {
    "title": "{ההיפךשלרצון1}",
    "question": "מה ההיפך של הרצון {רצון1}?",
    "dialogeType": "horizontal",
    "placeholder": "ההיפך של הרצון",
    "answer": "",
    "ref": ["{רצון1}"],
    "mirror": false,
    "css": [{"color":[{"{רצון1}":"#ffba01"}]}

    ]
  },
  {
    "title": "{ההיפךשלמציאות2}",
    "question": "מה ההיפך של המציאות {2המציאות}?",
    "dialogeType": "horizontal",
    "placeholder": "ההיפך של המציאות",
    "buttons": "?",
    "answer": "",
    "ref": ["{2המציאות}"],
    "mirror": false,
    "css": [{"color":[{"{2המציאות}":"#ffba01"}]}]
  },

  {
    "title": "{וידוי3}",
    "question": "אם לא היית רוצה {רצון1},__האם היה מפריע לך {2המציאות}?",
    "dialogeType": "prompt",
    "buttons": { "a": "לא", "b": "כן" },
    "answer": "",
    "ref": ["{רצון1}","{2המציאות}"],
    "css": [{"color":[{"רוצה":"#ffba01"}]}]
  },
  {
    "title": "{סיבתהרצון1}",
    "question": "למה הינך רוצה {רצון1}?",
    "dialogeType": "horizontal",
    "placeholder": "סיבת הרצון",
    "buttons": { "a": "המשך", "b": "סיים" },
    "answer": "",
    "ref": ["{רצון1}"]
  },
  {
    "title": "{רצון2}",
    "question": "אז מה הינך בעצם רוצה?",
    "dialogeType": "horizontal",
    "placeholder": "סיבת הרצון",
    "answer": "",
    "wishDBUpdate": true
  },
  {
    "title": "{הסבר1}",
    "h1":"ניתוח נתונים__וסיכום ביניים",
    "question": "",
    "dialogeType": "summaryInner",
    "answer": "",
    "ref": [ "{2המציאות}","{רצון1}","{רצון2}"],
    "css": [
      {"color": [{"המציאות":"#ffba01"}, {"רצונך":"#ffba01"}, {"{רצון2}":"#ffba01"}]},
      {"font-size": [{"ניתוח נתונים":"20px"}, {"וסיכום ביניים":"20px"}, {"{רצון2}":"20px"}]},
      {"text-align":[{"{רצון2}":"center !important;"}]},
      {"display":[{"{רצון2}":"block"}]}
    ]
  },
  {
    "title": "{ההיפךשלרצון2}",
    "question": "לתפיסתך מה ההיפך של {רצון2}?",
    "placeholder": "ההיפך של סיבת הרצון",
    "dialogeType": "horizontal",
    "answer": "",
    "ref": ["{רצון2}"],
    "css": [
      {"color": [{"{רצון2}":"#F4BD41"}]}]
  },
  {
    "title": "{האםהסיבהמחייבת}",
    "question": "סיבה ⬅ תוצאה__האם ועד כמה מחויב שאם {רצון1},__אז זה יגרום לתוצאה של {רצון2}?",
    "dialogeType": "prompt",
    "buttons": { "a": "לא מחויב", "b": "מחויב" },
    "answer": "",
    "ref": ["{רצון2}","{רצון1}"],
    "css": [{"color": [ {"סיבה ⬅ תוצאה":"#8c94a8"}]},
    {"font-size": [{"סיבה ⬅ תוצאה":"20px"}]}
  ]
  },
  {
    "title": "{האםהסיבהמחייבת}",
    "question": "האם יש אפשרות ש{רצון1} יגרום לתוצאה אחרת__או אפילו ל{ההיפךשלרצון2}?",
    "dialogeType": "prompt",
    "buttons": { "a": "בלתי אפשרי", "b": "אפשרי" },
    "answer": "",
    "ref": ["{ההיפךשלרצון2}","{רצון1}"],
    "css": [{"color": [ {"האם הסיבה מחייבת את התוצאה?":"#8c94a8"}]}]
  },
  {
    "title": "{האםהתוצאהמתחייבת}",
    "question": "תוצאה ⬅ סיבה__האם {רצון2} בהכרח מתחייב מ{רצון1}?",
    "dialogeType": "prompt",
    "buttons": { "a": "לא בהכרח", "b": "כן בהכרח" },
    "answer": "",
    "ref": ["{רצון2}","{רצון1}"],
    "css": [{"color": [    {"תוצאה ⬅ סיבה":"#8c94a8"}]},
    {"font-size": [{"תוצאה ⬅ סיבה":"20px"}]}
  ]
  },
  {
    "title": "{האםהתוצאהמתחייבת}",
    "question": "האם יש אפשרות שיש דרכים אחרות ל{רצון2} מאשר {רצון1}?__ואולי אפילו בדרך ההפוכה: {רצון2} מכך {ההיפךשלרצון1}?",
    "dialogeType": "prompt",
    "buttons": { "a": "בלתי אפשרי", "b": "אולי יש אפשרות" },
    "answer": "",
    "ref": ["{רצון2}","{רצון1}","{רצון2}","{ההיפךשלרצון1}"],
    "css": [{"color": [    {"האם התוצאה מתחייבת מהסיבה?":"#8c94a8"}]}],
    "swap" : {  "{2המציאות}" : "{ההיפךשלרצון1}",
                "{רצון1}" : "{רצון2}",
                "{ההיפךשלרצון1}" : "{ההיפךשלרצון2}"},
    "goto": "{וידוי3}"
  },
  {
    "title": "{חוצץ}",
    "question": "",
    "dialogeType": "divider",
    "answer": "",
    "swap" : {  "{2המציאות}" : "{ההיפךשלרצון1}",
                "{רצון1}" : "{רצון2}",
                "{ההיפךשלרצון1}" : "{ההיפךשלרצון2}"},
                
    "goto": "{וידוי3}"
  },
  ]

export default questions;