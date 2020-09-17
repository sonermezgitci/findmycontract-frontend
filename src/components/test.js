// /// Basic elements in react with JSX and equivalent with out 

// const element = (
//     <h1 classname= "greeting">
//         hello world 
//     </h1>
// );

// // Equivalent of the above using React.createElement 

// const element = React.createElement(
//     'h1',
//     {'className': 'greeting'},
//     'Hello World'!
// );

// // When using React’s createClass() method, we pass in an object as an argument. 
// //So we can write a component using createClass that looks like this:
// import React from "react"

// const element = React.createClass({
//  render (){
//      return (

//         <div> 
//         </div>
//      )
//  }

// })
//  export default Contacts;

// //Using an ES6 class to write the same component is a little different. Instead of using a method from the react library,
// // we extend an ES6 class that the library defines, Component.

// import React from 'react';

// class Contract extends React.Component({
//     constructor(props){
//         super(props)
//     }

//     render() {
//         return(
//             <div>


//             </div>
//         )
//     }
// })
 

import React from "react"

const bookList = books => (
    <ul>
     {books.map(({title, author })
     )}

    </ul>
)

