

import React from 'react';


const Quiz = React.createContext()



export default function QuizContext({children}){

  //Set state for user
  const [data_props, set_data_props] = React.useState({});

  return(
    <Quiz.Provider value={{
      data_props,
      set_data_props
    }}>

      {children}
      
    </Quiz.Provider>
  )

}

export const QuizState = () => React.useContext(Quiz);


