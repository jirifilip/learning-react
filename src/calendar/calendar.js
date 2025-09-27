import { useState } from "react"

export function Day({n}) {
    const [focused, setFocused] = useState(false)

    const style = {
        display: "inline-block",
        border: "1px solid black",
        borderRadius: "10px",
        margin: "5px",
        padding: "2%",
        backgroundColor: focused ? "cyan" : "white",
    }

    return (
        <div
            onMouseEnter={() => setFocused(true)}
            onMouseLeave={() => setFocused(false)}
            style={style}>
                {n}
        </div>
    )
}


export function Rowed({nRows, children}) {
    const nChildren = children.length

    return <>
        {children}
    </>
}


export function CalendarMonth({nDays = 30}) {
    const dayRange = Array(nDays).fill(0).map((_, i) => i + 1)
    const days = dayRange.map((day, i) => <Day n={day} key={i}></Day>)
    
    return <div>
        <Rowed>
            {days}
        </Rowed>
    </div>
}