import { useState, useContext, useReducer } from "react";
import { ExampleContext } from "./lib";
import { todoReducer, todoInitialState } from "./reducer";

export function TodoList({ text }) {
    const [textCount, setTextCount] = useState(4);
    const example = useContext(ExampleContext)
    
    const [state, dispatch] = useReducer(todoReducer, todoInitialState)

    function handleAdd() {
        const name = "New todo to do!"
        const id = name.toLowerCase().replaceAll(/[!-. ]/g, "_")
        dispatch({type: "ADD", name: "New todo to do!", id})
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
                </p>
            )
        )


    return (
        <div>
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
