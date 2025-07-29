import { render, screen, fireEvent } from "@testing-library/react";
import Contador from "./Contador";


test("renderiza contador com valor inicial 0", () => {
  render(<Contador />);
  expect(screen.getByText(/Contador: 0/i)).toBeInTheDocument();
});

test("incrementa o contador ao clicar no botão", () => {
  render(<Contador />);
  const botao = screen.getByText("Incrementar");
  fireEvent.click(botao);
  expect(screen.getByText("Contador: 1")).toBeInTheDocument();
});

test("reseta o contador ao clicar no botão Resetar", () => {
  render(<Contador />);
  fireEvent.click(screen.getByText("Incrementar"));
  fireEvent.click(screen.getByText("Resetar"));
  expect(screen.getByText("Contador: 0")).toBeInTheDocument();
});
