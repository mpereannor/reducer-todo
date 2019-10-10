import React from 'react';

// export default class TodoForm extends Component{

//     render() {
//         const { task, onTodoForm, onInputChange} = this.props;
//         return (
//             <div>
//                 <form onSubmit={onTodoForm}>
//                     <input 
//                         type="text" 
//                         value={task} 
//                         onChange={onInputChange} 
//                         placeholder="...todo" />
//                     <button type='submit'>Add Todo</button>
//                 {/* <button onClick={clearAll}>Clear All</button> */}
//                 </form>
//             </div>
//         )
//     }

// }

const ADD_TODOS = 'ADDTODOS';

export default function  TodoForm () {

    const [todoForm, dispatch] = useReducer(todoReducer, initialList);
    const addTodos = () => dispatch({type: ADD_TODOS});

    return (
        <div>
            <form>
                <input type="text" placeholder="jot down your plans"/>
                <button type='submit'>Add New Todo</button>
            </form>
        </div>
    )
}


