import { render, screen, fireEvent } from "@testing-library/react";
import ContadorSimples from "./ContadorSimples";

test("render contage equals 0", () => {
  render(<ContadorSimples />);

  expect(screen.getByText("Contagem: 0")).toBeInTheDocument()
  
});

test("Simulate the click on the button adicionar", () => {
    render(<ContadorSimples/>)
    
    const botao = screen.getByText("Adicionar")
    fireEvent.click(botao)

    expect(screen.getByText("Contagem: 1")).toBeInTheDocument()
})

test("Simulate the click on the button zerar", () => {
    render(<ContadorSimples/>)

    const botaoAdd = screen.getByText("Adicionar")
    fireEvent.click(botaoAdd)

    expect(screen.getByText("Contagem: 1")).toBeInTheDocument()
    
    const botaoZerar = screen.getByText("Zerar")
    fireEvent.click(botaoZerar)

    expect(screen.getByText("Contagem: 0")).toBeInTheDocument()
})

