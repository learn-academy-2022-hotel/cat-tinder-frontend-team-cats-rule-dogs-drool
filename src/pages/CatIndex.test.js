import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import CatIndex from "./CatIndex"
import mockCats from "../mockCats"

describe("<CatIndex />", () => {
    it("renders without crashing ", () => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
             <CatIndex/>
            </BrowserRouter>, div
        )
    })
    it("renders cat cards", () => {
        const div = document.createElement("div")
        render(
           <BrowserRouter>
            <CatIndex cats={mockCats}/>
           </BrowserRouter>, div
        )
        mockCats.forEach((cat) => {
            const catName = screen.getByText(cat.name)
            expect(catName).toBeInTheDocument()
        })
    })
})