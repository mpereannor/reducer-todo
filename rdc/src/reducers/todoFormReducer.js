export const todoReducer = function reducer(newTodos, action) {
    switch (action.type){

      case ON_INPUT_CHANGE: 
      return {
        ...newTodos, 
        [action.payload.task]: [action.payload.value]
      }
      // case ADD_TODOS: 
      // return (event) => {
      //   event.preventDefault();
      //   const newTodo = {
      //     task: todos.task,
      //     id: Date.now(),
      //     completed: false
      //   };

      //   todos({
      //     todos: todos.concat(newTodo)
      //   })

      }
        
      default: 
      return todos;
      }
    }



// addTodo = (event) => {
//     // const { todoData, todoForm } = this.state;
//     event.preventDefault();

//     const newTodo = {
//       task: this.state.task,
//       id: Date.now(),
//       completed: false
//     };

//     //setState updates the state
//     this.setState({
//       todoData: this.state.todoData.concat(newTodo),   
//       task: ''
//     }
//     )
//   }
