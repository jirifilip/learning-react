import makeDate from "./utils"

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
        case "calendar/event-focus": 
            return {
                ...state,
                calendar: {
                    ...state.calendar,
                    focusedEvent: action.eventId
                }
            }
        case "calendar/event-unfocus": 
            return {
                ...state,
                calendar: {
                    ...state.calendar,
                    focusedEvent: null
                }
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
    ],
    calendar: {
        events: [
            {id: 1, date: makeDate(2025, 9, 1), description: "Work 8:00 - 12:00"},
            {id: 2, date: makeDate(2025, 9, 1), description: "Home office"},
            {id: 3, date: makeDate(2025, 9, 2), description: "Home office 1/2"},
        ],
        focusedEvent: null
    } 
}


export function selectEventsByDate(state, date) {
    return state.calendar.events
        .filter(event => event.date.getTime() == date.getTime())
}


export function selectEventById(state, id) {
    return state.calendar.events
        .filter(event => event.id == id)[0]
}


export function selectFocusedEvent(state) {
    return selectEventById(state, state.calendar.focusedEvent)
}
