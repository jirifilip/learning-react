import { createRoot } from "react-dom/client";
import { TodoList } from "./todo-list";
import { ExampleContext, TodoContext, TodoDispatchContext } from "./lib";
import { useReducer } from "react";
import { todoInitialState, todoReducer } from "./reducer";


export { TodoList as MyButton }

const root = createRoot(document.getElementById("react-root"))


function Index({children}) {
    const [todoState, todoDispatch] = useReducer(todoReducer, todoInitialState)

    return <>
        <TodoContext value={todoState}>
            <TodoDispatchContext value={todoDispatch}>
                {children}
            </TodoDispatchContext>
        </TodoContext>
    </>
}


root.render(
    <Index>
        <TodoList text="Add a new text! Wohoo!"/>
    </Index>
)
