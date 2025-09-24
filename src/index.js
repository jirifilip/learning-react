import { createRoot } from "react-dom/client";
import { TodoList } from "./todo-list";
import { ExampleContext } from "./lib";


export { TodoList as MyButton }

const root = createRoot(document.getElementById("react-root"))


root.render(
    <ExampleContext value={{"some": "a"}}>
        <TodoList text="Add a new text! Wohoo!"/>
    </ExampleContext>
)
