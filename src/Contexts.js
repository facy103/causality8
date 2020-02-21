import React, { Component, useState  } from 'react';
import questions from './DB/perfectDB';

export const MyContext = React.createContext(0);

// export class MyProvider extends Component {
//     // const [questionCount, SetQuestionIndex] = useState(0);
 
//    render() {
//        return (
//            <MyContext.Provider value={this.state}>
//         {this.props.children}
//       </MyContext.Provider>
//     )
// }
// }

export const MyConsumer = MyContext.Consumer;
