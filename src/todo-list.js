import { useState, useContext, useReducer } from "react";
import { ExampleContext } from "./lib";
import { todoReducer, todoInitialState } from "./reducer";
import { useAppDispatch, useAppStore } from "./hooks";

export function TodoList({ text }) {
    const store = useAppStore()
    const dispatch = useAppDispatch()

    const [todoText, setTodoText] = useState("Example ToDo!");
    
    function handleAdd() {
        const id = todoText.toLowerCase().replaceAll(/[!-. ]/g, "_")
        dispatch({type: "ADD", name: todoText, id})
    }

    function handleRemove(id) {
        dispatch({type: "REMOVE", id})
    }

    const texts = store.todos
        .map(
            (todo, index) => (
                 <p
                    key={index}
                    style={{
                        border: "2px solid black"
                    }}
                    >
                    {todo.id} - {todo.name}
                    <button onClick={() => handleRemove(todo.id)}>DELETE</button>
                </p>
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
