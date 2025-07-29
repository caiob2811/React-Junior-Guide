import { fireEvent, render, screen } from "@testing-library/react"
import FormularioMensagem from "./FormularioMsg"

test("renderize o input e botão", () => {
    render(<FormularioMensagem/>)
    expect(screen.getByPlaceholderText("Digite sua mensagem")).toBeInTheDocument()
    expect(screen.getByText("Enviar")).toBeInTheDocument()
})

test("Digitar no input", () => {
    render(<FormularioMensagem/>)

    const input = screen.getByPlaceholderText("Digite sua mensagem")
    expect(input).toBeInTheDocument()

    fireEvent.change(input, {target: {value: "Olá mundo"}})

    expect(input.value).toBe("Olá mundo")
})

test("Mensagem de teste", () => {
    render(<FormularioMensagem/>)

    const input = screen.getByPlaceholderText("Digite sua mensagem")

    fireEvent.change(input, {target: {value: "Mensagem de teste" }})

    const botao = screen.getByText("Enviar")

    fireEvent.click(botao)

    expect(screen.getByText("Mensagem enviada: Mensagem de teste")).toBeInTheDocument()

})