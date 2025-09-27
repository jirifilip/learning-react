import { useAppDispatch } from "../store/hooks"

export function ToDo({name, id}) {
    const dispatch = useAppDispatch()

    function handleRemove(id) {
        dispatch({type: "REMOVE", id})
    }

    return <p
        style={{
            border: "2px solid black"
        }}
        >
        {id} - {name}
        <button onClick={() => handleRemove(id)}>DELETE</button>
    </p>
}