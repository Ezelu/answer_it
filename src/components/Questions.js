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










































import React from 'react';
import { Container, Chip } from '@material-ui/core';
import './Questions.css'



export default function Question ({questions}) {
  
  // Function the parse string to HTML format
  const stringToHTML = function (str) {
    let parser = new DOMParser();
    let doc = parser.parseFromString(str, 'text/html');
    return doc.body.textContent;
  };

  //set state for database questions and answers
  const [database, set_database] = React.useState({});

  


  




  return (
    <div>
      <Container className='info'>
        <div>
          <h2> Category: </h2> 
          <h4> {questions[0] && questions[0].category} </h4>
        </div>

        <div>
          <h2> difficulty: </h2> 
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
              console.log(each)
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