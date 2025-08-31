function MyButton({text}) {
    const [textCount, setTextCount] = React.useState(4)

    return (
        React.createElement(
            "div",
            {},
            [
                React.createElement(
                    "button",
                    {
                        key: "btn1",
                        onClick: (evt) => setTextCount(textCount + 1)
                    },
                    text
                ),
                ...Array(textCount)
                    .fill(null)
                    .map(
                        (_, index) => (
                            React.createElement(
                                "p",
                                {
                                    key: `element-${index}`,
                                    style: {
                                        border: "2px solid black"
                                    }
                                },
                                "Some text - bla bla"
                            )
                        )
                    )
            ]
        )
        
    )
}


export { MyButton }


const root = ReactDOM.createRoot(document.getElementById("react-root"))

root.render(
    React.createElement(MyButton, {text: "Add a new text"})
)
