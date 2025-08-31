
function MyButton({text}) {
    return (
        React.createElement(
            "button",
            {onClick: (evt) => console.log("hello", evt)},
            text
        )
    )
}


const root = ReactDOM.createRoot(document.getElementById("react-root"))

root.render(
    MyButton({text: "I'm a button!"})
)
