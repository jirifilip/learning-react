import { useState, useContext } from "react";
import { ExampleContext } from "./lib";

export function MyButton({ text }) {
    const [textCount, setTextCount] = useState(4);
    const example = useContext(ExampleContext)

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
            <button onClick={(evt) => setTextCount(textCount + 2)}>
            {text}
            </button>
            {texts}
            <div>
            {example.some}
            </div>
        </div>

    );
}
