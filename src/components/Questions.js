// import React from 'react';
// import { Container, Chip } from '@material-ui/core';
// import './Questions.css'



// export default function Question ({questions}) {
  
  

//   const stringToHTML = function (str) {
//     let parser = new DOMParser();
//     let doc = parser.parseFromString(str, 'text/html');
//     return doc.body;
//   };










//   return (
//     <div>
//       <Container className='info'>
//         <div>
//           <h2> Category: </h2> 
//           <h4> {questions[0] && questions[0].category} </h4>
//         </div>

//         <div>
//           <h2> difficulty: </h2> 
//           <h4> {questions[0] && questions[0].difficulty} </h4>
//         </div>

//         <div>
//           <h2> Questions: </h2> 
//           <h4> {questions[0] && questions.length} </h4>
//         </div>
//       </Container>


//       <Container>
//         <ol>
//           {
//             questions[0] &&

//             questions.map(each => {
//               console.log(each)
//               return (
//                 <li> {each.question} <br/> </li>
//               )
//             })
//           }
//         </ol>
//       </Container>
//     </div>
//   )
// }










































// import React from 'react';
// import { Container, Chip } from '@material-ui/core';
// import './Questions.css'



// export default function Question ({questions, loading}) {
  
//   // Function the parse string to HTML format
//   const stringToHTML = function (str) {
//     let parser = new DOMParser();
//     let doc = parser.parseFromString(str, 'text/html');
//     return doc.body.textContent;
//   };

//   //set state for database questions and answers
//   const [database, set_database] = React.useState({});

//   !loading &&
//     (function update_database () {
//       let dummy_database = {}

//       for(let i = 1; i <= questions.length; i++){

//         dummy_database[`Q${i}`] = {
//           correct_answer : questions[i] && questions[i]['correct_answer'],
//           user_answer : "",
//           question_id : `Q${i}`,
//           correct : false,
//           options : []
//         };
    
//       }
      
//     console.log(dummy_database)
//     })()




//   // category: "Entertainment: Music"
//   // correct_answer: "The Chemical Brothers"
//   // difficulty: "medium"
//   // incorrect_answers: (3) ['Air', 'Justice', 'Daft Punk']
//   // question: "Which of these artists do NOT originate from France?"
//   // type: "multiple"

  




//   return (
//     <div>
//       <Container className='info'>
//         <div>
//           <h2> Category: </h2> 
//           <h4> {questions[0] && questions[0].category} </h4>
//         </div>

//         <div>
//           <h2> Difficulty: </h2> 
//           <h4> {questions[0] && questions[0].difficulty} </h4>
//         </div>

//         <div>
//           <h2> Questions: </h2> 
//           <h4> {questions[0] && questions.length} </h4>
//         </div>
//       </Container>


//       <Container>
//         <ol>
//           {
//             questions[0] &&

//             questions.map(each => {
//               // console.log(each)
//               return (
//                 <li> {stringToHTML(each.question)} <br/> </li>
//               )
//             })
//           }
//         </ol>
//       </Container>
//     </div>
//   )
// }












































import React from 'react';
import { Container, Chip } from '@material-ui/core';
import './Questions.css'



export default function Question ({questions, loading}) {
  
  // Function the parse string to HTML format
  const stringToHTML = function (str) {
    let parser = new DOMParser();
    let doc = parser.parseFromString(str, 'text/html');
    return doc.body.textContent;
  };

  //set state for database questions and answers
  const [database, set_database] = React.useState({});

  !loading &&
    (function update_database () {
      let dummy_database = {}

      for(let i = 0; i < questions.length; i++){
        //Combine the options and correct answers and sort em randomly
        const options = questions[i] && 
          [...questions[i]['incorrect_answers'], questions[i]['correct_answer']].sort(() => Math.random() - 0.5)
          

        dummy_database[`Q${i}`] = {
          correct_answer : questions[i] && questions[i]['correct_answer'],
          user_answer : "",
          question_id : `Q${i}`,
          correct : false,
          options : [...options]
        };
    
      }
      
    console.log(dummy_database)
    })()




  // category: "Entertainment: Music"
  // correct_answer: "The Chemical Brothers"
  // difficulty: "medium"
  // incorrect_answers: (3) ['Air', 'Justice', 'Daft Punk']
  // question: "Which of these artists do NOT originate from France?"
  // type: "multiple"

  




  return (
    <div>
      <Container className='info'>
        <div>
          <h2> Category: </h2> 
          <h4> {questions[0] && questions[0].category} </h4>
        </div>

        <div>
          <h2> Difficulty: </h2> 
          <h4> {questions[0] && questions[0].difficulty} </h4>
        </div>

        <div>
          <h2> Questions: </h2> 
          <h4> {questions[0] && questions.length} </h4>
        </div>
      </Container>


      <Container>
        <ol>
          {
            questions[0] &&

            questions.map(each => {
              // console.log(each)
              return (
                <li> {stringToHTML(each.question)} <br/> </li>
              )
            })
          }
        </ol>
      </Container>
    </div>
  )
}