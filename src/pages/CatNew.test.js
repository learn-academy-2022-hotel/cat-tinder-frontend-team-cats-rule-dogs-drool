import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import CatNew from './CatNew'

describe("<CatNew />", () => {
    render(
        <BrowserRouter>
            <CatNew />
        </BrowserRouter>
    )
    it('can see the title of the page', () => {
        const element = screen.getByText(/submission/i)
        expect(element).toBeInTheDocument()
    })
})