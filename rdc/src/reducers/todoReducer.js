import uuid from 'uuid';
 export const initialList = [
     {
    id:  Date.now(),
    task: 'Learn about reducers',
    completed: false, 
}
]

export const todoReducer = function reducer(todos, action) {
    switch (action){
        // case STH: 
        // return newSTH;
        default: 
        return todos;
    }
}
