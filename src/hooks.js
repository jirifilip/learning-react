import { useContext } from "react";
import { StoreContext, DispatchContext } from "./lib";

export function useAppDispatch() {
    return useContext(DispatchContext)
}

export function useAppStore() {
    return useContext(StoreContext)
}
