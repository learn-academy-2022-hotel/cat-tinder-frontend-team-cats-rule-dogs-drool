import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"
import Header from "./Header"

describe("<Header />", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
                <Header/>
            </BrowserRouter>,
            div
        )
    })
    it("has clickable links", () => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
        )
        userEvent.click(screen.getByText("Home"))
        expect(screen.getByText("Home")).toBeInTheDocument()
        userEvent.click(screen.getByText("New Cat"))
        expect(screen.getByText("New Cat")).toBeInTheDocument()
        userEvent.click(screen.getByText("See Cats"))
        expect(screen.getByText("See Cats")).toBeInTheDocument()
    })
})