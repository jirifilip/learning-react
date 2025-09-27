import { useState } from "react"
import { useAppDispatch, useAppStore } from "../store/hooks"
import { selectEventById, selectEventsByDate, selectFocusedEvent } from "../store/store"
import makeDate from "../store/utils"


function useFocusStyle(focusStyle, unfocusedStyle) {
    const [focused, setFocused] = useState(false)

    const onFocused = () => setFocused(true)
    const onUnFocused = () => setFocused(false)
    
    return {
        onFocused,
        onUnFocused,
        style: focused ? focusStyle : unfocusedStyle
    }
}


export function EventInspectorModal({children, closeCallback}) {
    const focusProps = useFocusStyle({color: "red"}, {color: "black"})
    
    const style = {
        border: "1px solid blue",
        backgroundColor: "lightgreen"
    }

    return <div style={style}>
        <p style={focusProps.style} onMouseEnter={focusProps.onFocused} onMouseLeave={focusProps.onUnFocused} onClick={closeCallback}>CLOSE</p>
        {children}
    </div>
}


export function EventInspector() {
    const store = useAppStore()
    const dispatch = useAppDispatch()

    if (!store.calendar.focusedEvent) {
        return <EventInspectorModal>
            No Event Selected!
        </EventInspectorModal>
    }

    const event = selectFocusedEvent(store)

    return <EventInspectorModal closeCallback={() => dispatch({type: "calendar/event-unfocus"})}>
        {event.description}
    </EventInspectorModal>
}


export function Event({id, description}) {
    const dispatch = useAppDispatch()
    const focusProps = useFocusStyle({backgroundColor: "red"}, {backgroundColor: "pink"})

    function handleEventFocus() {
        dispatch({type: "calendar/event-focus", eventId: id})
    }

    const style = {
        border: "1px solid red",
        backgroundColor: "pink",
        borderRadius: "10px",
        padding: "0.5%",
        ...focusProps.style
    }   

    return <div 
        onMouseEnter={focusProps.onFocused} 
        onMouseLeave={focusProps.onUnFocused} 
        onClick={handleEventFocus} style={style}>
            {description}
        </div>
}


export function Events({year, month, day}) {
    const store = useAppStore()
    const events = selectEventsByDate(store, makeDate(year, month, day))

    return <>
        {events.map(event => <Event key={event.id} id={event.id} description={event.description}/>)}
    </>
}


export function Day({n}) {
    const focusProps = useFocusStyle({backgroundColor: "cyan"}, {backgroundColor: "grey"})

    const style = {
        display: "inline-block",
        border: "1px solid black",
        borderRadius: "10px",
        margin: "5px",
        padding: "2%",
        ...focusProps.style
    }

    return (
        <div
            onMouseEnter={focusProps.onFocused}
            onMouseLeave={focusProps.onUnFocused}
            style={style}>
                {n}
                <Events year={2025} month={9} day={n} />
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
    
    return <>
        <div>
            <Rowed nRows={5}>
                {days}
            </Rowed>
        </div>
        <EventInspector />
    </>
}