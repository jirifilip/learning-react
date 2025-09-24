import { useState, useContext, useReducer } from "react";
import { ExampleContext } from "./lib";
import { todoReducer, todoInitialState } from "./reducer";

export function TodoList({ text }) {
    const [todoText, setTodoText] = useState("Example ToDo!");
    const [state, dispatch] = useReducer(todoReducer, todoInitialState)
    const example = useContext(ExampleContext)
    
    function handleAdd() {
        const id = todoText.toLowerCase().replaceAll(/[!-. ]/g, "_")
        dispatch({type: "ADD", name: todoText, id})
    }

    function handleRemove(id) {
        dispatch({type: "REMOVE", id})
    }

    const texts = state.todos
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
            <div>
            {example.some}
            </div>
        </div>

    );
}
