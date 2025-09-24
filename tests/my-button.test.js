/**
 * @jest-environment jsdom
 */

import { TodoList } from "../src/todo-list.js"
import { cleanup, screen, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom'
import { createElement } from "react"
import { experiments } from "webpack";


test("something", async () => {
    render(
        createElement(TodoList, {text: "hello"})
    )

    expect(screen.getByRole("button")).toHaveTextContent("hello")
})
