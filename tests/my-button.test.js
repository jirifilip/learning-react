/**
 * @jest-environment jsdom
 */

import { MyButton } from "../src/my-button.js"
import { cleanup, screen, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom'
import { createElement } from "react"
import { experiments } from "webpack";


test("something", async () => {
    render(
        createElement(MyButton, {text: "hello"})
    )

    expect(screen.getByRole("button")).toHaveTextContent("hello")
})
