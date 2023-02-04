import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import CatEdit from './CatEdit'

describe("<CatEdit />", () => {
    render(
        <BrowserRouter>
            <CatEdit />
        </BrowserRouter>
    )
    it('can see the title of the page', () => {
        const element = screen.getByText(/Cat Information/i)
        expect(element).toBeInTheDocument()
    })
    it('has a submit button', () => {
        render(
            <BrowserRouter>
                <CatEdit />
            </BrowserRouter>
        )
        const button = screen.getByRole('button', {
            name: /submit/i
        })
        expect(button).toBeInTheDocument()
    })
})