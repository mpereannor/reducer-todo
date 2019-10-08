// import React from 'react';

// export default function Todo (){

//     const{task, toggleCompleted} = props;

//     const{id, completed} = task;

//     const style = {
//         textDecoration: completed ? 
//         'line-through' : 'unset'
//     }
//     return (
//         <div>
//             <p
//              style={style }
//             onClick={
//             () => toggleCompleted(id)}
//             {props.task}
//                >
//             </p> 
//         </div>
//     )
// }
// export default class Todo extends Component{
 
//     render() {
//         const {  task, toggleCompleted } = this.props;
//        const { id, completed } = task;
    
//         const style = {
//             textDecoration: completed ? 'line-through': 'unset'
//         }
//         return(
//             <div>
//                  <p 
//                 style={style} 
//                    onClick={ ()=> toggleCompleted(id)}
//                     >
//                     {this.props.task}
//                     </p>
//             </div>
//         )
//     }
// }