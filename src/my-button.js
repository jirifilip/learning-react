import { useState, createElement } from "react";

export function MyButton({ text }) {
    const [textCount, setTextCount] = useState(4);

    return (
        createElement(
            "div",
            {},
            [
                createElement(
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
                            createElement(
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

    );
}
