export const reducer = (state, action) => {
    switch (action.type) {
        case "todo/fetched":
            return {
                ...state,
                todosFetched: true,
                todos: action.todos.todos.map(todo => ({
                    id: todo.id, name: todo.todo, completed: todo.completed
                }))
            }
        case "todo/set-fetched-false":
            return {
                ...state,
                todosFetched: false
            }
        case "ADD":
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {id: action.id, name: action.name}
                ]
            }
        case "REMOVE":
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id != action.id)
            }
        case "FUNCTION": 
            action.f(action.dispatch, state)
            return { ...state }
        default:
            return { ...state }
    }
}


export const initialState = {
    todosFetched: false,
    todos: [
        {id: 1, name: "Clean up room"},
        {id: 2, name: "Do grocery shopping"}
    ]
}