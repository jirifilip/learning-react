export const todoReducer = (state, action) => {
    switch (action.type) {
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
        default:
            return { ...state }
    }
}


export const todoInitialState = {
    todos: [
        {id: 1, name: "Clean up room"},
        {id: 2, name: "Do grocery shopping"}
    ]
}