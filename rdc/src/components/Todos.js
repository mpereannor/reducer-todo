import React, {useReducer} from 'react';
import {initialList, todoReducer} from '../reducers/todoReducer';
// import Todo from './Todo';

// come up with types of actions this state can suffer
// and save them into variables, CAPITALIZED

// const TOGGLE_COMPLETED = 'TOGGLECOMPLETED';
// const ADD_TODOS = 'ADDTODOS';
// const CLEAR_COMPLETED = 'CLEARCOMPLETED';

export default function Todos () {
    const[todos, dispatch] = useReducer(todoReducer, initialList);
    // const toggleCompleted = () => dispatch({type: TOGGLE_COMPLETED});

   
    // const clearCompleted = () => dispatch({type: CLEAR_COMPLETED});

    return (
    <div>
         
         {todos.map(todo =>  {
             return(
         
             <div key={todo.id}>
                 {todo.task}
             </div>
             )
         } )}
         
    </div> 
    )

}