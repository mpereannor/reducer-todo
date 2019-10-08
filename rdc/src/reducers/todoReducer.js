import uuid from 'uuid';
 export const initialList = [
     {
    id:  Date.now(),
    task: 'Learn about reducers',
    completed: false, 
}
]

export const todoReducer = function reducer(newTodo, action) {
    switch (action.type){
       
        // case STH: 
        // return newSTH;
        default: 
        return todos;
    }
}
