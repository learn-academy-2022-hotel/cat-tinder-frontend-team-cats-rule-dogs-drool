import React from "react"
import App from './App';
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"


describe("<App/>", () => {
 it("renders a greeting", () => {
  render(
    <BrowserRouter>
     <App/>
    </BrowserRouter>
  )
  const greeting = screen.getByText("This is Home")
  expect(greeting).toBeInTheDocument()
 })  
  it("has a heading", () => {
    render(
      <BrowserRouter>
       <App/>
      </BrowserRouter>
    )
    const heading = screen.getByRole("heading", {
      name: /home/i
    })
    expect(heading).toBeInTheDocument()
  })
});
