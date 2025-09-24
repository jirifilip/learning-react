import { createRoot } from "react-dom/client";
import { MyButton } from "./my-button";
import { ExampleContext } from "./lib";


export { MyButton }

const root = createRoot(document.getElementById("react-root"))


root.render(
    <ExampleContext value={{"some": "a"}}>
        <MyButton text="Add a new text! Wohoo!"/>
    </ExampleContext>
)
