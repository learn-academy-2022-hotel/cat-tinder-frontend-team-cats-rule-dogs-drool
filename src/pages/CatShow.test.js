import React from "react"
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from "react-router-dom"
import CatShow from './CatShow'
import mockCats from '../mockCats'

const renderShow = () => {
    render(
        <MemoryRouter initialEntries={["/catshow/1"]}>
            <Routes>
                <Route path="catshow/:id" element={<CatShow cats={mockCats}/>} />
            </Routes>
        </MemoryRouter>
    )
}

describe("<CatShow />", () => {
    it("renders cat cards with enjoys ", () => {
        renderShow()
        screen.logTestingPlaygroundURL()
        expect(screen.getByText(`Enjoys: ${mockCats[0].enjoys}`)).toBeInTheDocument()

    })
})