import { useState } from "react"

export function Day({n}) {
    const [focused, setFocused] = useState(false)

    const style = {
        display: "inline-block",
        border: "1px solid black",
        borderRadius: "10px",
        margin: "5px",
        padding: "2%",
        backgroundColor: focused ? "cyan" : "grey",
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
    const nChildrenPerRow = Math.round(nChildren / nRows)

    const rows = Array(nRows)
        .fill(0)
        .map(
            (_, i) => ({
                start: i * nChildrenPerRow, 
                end: i == nRows - 1 ? undefined : (i + 1) * nChildrenPerRow
            })
        )
        .map(
            ({start, end}) => children.slice(start, end)
        )

    console.log(rows)
    return <>
        {rows.map(
            (row, rowI) => <div key={rowI}>
                {row.map((element, i) => <span key={i}>{element}</span>)}    
            </div>
        )}
    </>
}


export function CalendarMonth({nDays = 31}) {
    const dayRange = Array(nDays).fill(0).map((_, i) => i + 1)
    const days = dayRange.map((day, i) => <Day n={day} key={i}></Day>)
    
    return <div>
        <Rowed nRows={3}>
            {days}
        </Rowed>
    </div>
}