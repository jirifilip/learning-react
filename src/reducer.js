import { act } from "react"

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "todo/fetched":
            return {
                ...state,
                todos: action.todos.todos.map(todo => ({
                    id: todo.id, name: todo.todo, completed: todo.completed
                }))
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


export const todoInitialState = {
    todos: [
        {id: 1, name: "Clean up room"},
        {id: 2, name: "Do grocery shopping"}
    ]
}