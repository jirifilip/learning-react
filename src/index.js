import { createRoot } from "react-dom/client";
import { TodoList } from "./todo-list";
import { ExampleContext, StoreContext, DispatchContext } from "./lib";
import { useReducer } from "react";
import { initialState, reducer } from "./reducer";
import { CalendarMonth } from "./calendar/calendar";


export { TodoList as MyButton }

const root = createRoot(document.getElementById("react-root"))


function Index({children}) {
    const [todoState, todoDispatch] = useReducer(reducer, initialState)

    return <>
        <StoreContext value={todoState}>
            <DispatchContext value={todoDispatch}>
                {children}
            </DispatchContext>
        </StoreContext>
    </>
}


// <TodoList text="Add a new text! Wohoo!"/>


root.render(
    <Index>
        <CalendarMonth></CalendarMonth>
    </Index>
)
