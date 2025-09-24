import { useContext } from "react";
import { TodoContext, TodoDispatchContext } from "./lib";

export function useAppDispatch() {
    return useContext(TodoDispatchContext)
}

export function useAppStore() {
    return useContext(TodoContext)
}
