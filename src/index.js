import { createElement } from "react";
import { createRoot } from "react-dom/client";
import { MyButton } from "./my-button";


export { MyButton }


const root = createRoot(document.getElementById("react-root"))

root.render(
    <MyButton text="Add a new text! Wohoo!"/>
)
