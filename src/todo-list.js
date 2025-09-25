import { useState, useContext, useReducer, useEffect } from "react";
import { useAppDispatch, useAppStore } from "./hooks";
import { ToDo } from "./todo";

export function TodoList({ text }) {
    const store = useAppStore()
    const dispatch = useAppDispatch()

    const [todoText, setTodoText] = useState("Example ToDo!");

    useEffect(() => fetchToDos(), [])

    function fetchToDos() {
        dispatch({
            type: "FUNCTION",
            f: async (dispatch, state) => {
                const response = await fetch('https://dummyjson.com/todos')
                const todos = await response.json()
                
                dispatch({type: "todo/fetched", todos})
            },
            dispatch
        })
    }

    function handleAdd() {
        const id = todoText.toLowerCase().replaceAll(/[!-. ]/g, "_")
        dispatch({type: "ADD", name: todoText, id})
    }

    const texts = store.todos
        .map(
            (todo, index) => (
                 <ToDo key={index} name={todo.name} id={todo.id} />
            )
        )


    return (
        <div>
            <textarea onChange={evt => setTodoText(evt.target.value)}></textarea>
            <button onClick={handleAdd}>
            {text}
            </button>
            {texts}
        </div>

    );
}
