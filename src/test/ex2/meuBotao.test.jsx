import { render, screen, fireEvent } from "@testing-library/react"
import MeuBotao from "./meuBotao"

test("renderiza o texto Clique aqui", () => {
    render(<MeuBotao/>)
    expect(screen.getByText("Clique aqui")).toBeInTheDocument()
}) 

test("renderize o clique do botão" , () => {
    render(<MeuBotao/>)

    expect(screen.queryByText("Botão clicado!")).toBeNull()

    const botao = screen.getByText("Clique aqui")
    fireEvent.click(botao)

    expect(screen.getByText("Botão clicado!")).toBeInTheDocument()
})