import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"
import Footer from "./Footer"

describe("<Footer />", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
                <Footer/>
            </BrowserRouter>,
            div
        )
    })
})