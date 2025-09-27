import { useContext } from "react";
import { StoreContext, DispatchContext } from "./context";

export function useAppDispatch() {
    return useContext(DispatchContext)
}

export function useAppStore() {
    return useContext(StoreContext)
}
