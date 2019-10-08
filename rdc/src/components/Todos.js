import React, {useReducer} from 'react';
import {initialList, todoReducer}

// come up with types of actions this state can suffer
// and save them into variables, CAPITALIZED

const TOGGLE_COMPLETED = 'TOGGLECOMPLETED';
const ADD_TODOS = 'ADDTODOS';
const CLEAR_COMPLETED = 'CLEARCOMPLETED'

export default function Todo () {
    const[todos, dispatch] = useReducer(todoReducer, initialList);

    const toggleCompleted = () => dispatch({type: TOGGLE_COMPLETED});

    const addTodos = () => dispatch({type: ADD_TODOS});

    const clearCompleted = () => dispatch({type: CLEAR_COMPLETED});


    return (
        <div>
            todos.map(todo => 
            <Todo
                key={todo.id}
                task={todo.task}
                toggleCompleted={toggleCompleted}
            />
        </div>
    )

}