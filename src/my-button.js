import { useState, createElement } from "react";

export function MyButton({ text }) {
    const [textCount, setTextCount] = useState(4);

    const texts = Array(textCount)
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
                    "Some text - bla bla bla"
                )
            )
        )


    return (
        <div>
            <button
                onClick={(evt) => setTextCount(textCount + 1)}
                >
                text
            </button>
            {texts}
        </div>

    );
}
