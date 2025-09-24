import { createContext } from "react";


export const ExampleContext = createContext({ "some": "value", "other": "stuff" });


export const TodoContext = createContext(null)
export const TodoDispatchContext = createContext(null)
