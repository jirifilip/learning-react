import { useState, createElement } from "react";

export function MyButton({ text }) {
    const [textCount, setTextCount] = useState(4);

    const texts = Array(textCount)
        .fill(null)
        .map(
            (_, index) => (
                 <p
                    key={index}
                    style={{
                        border: "2px solid black"
                    }}
                    >
                    Some text - bla bla bla
                </p>
            )
        )


    return (
        <div>
            <button onClick={(evt) => setTextCount(textCount + 1)}>
            {text}
            </button>
            {texts}
        </div>

    );
}
