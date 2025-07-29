import { render, screen, fireEvent } from "@testing-library/react";
import ListaDeTarefas from "./ListaDeTarefas";

test("render component ListaTarefas", () => {
  render(<ListaDeTarefas />);
  expect(screen.getByPlaceholderText("Digite uma tarefa")).toBeInTheDocument();

  expect(screen.getByText("Adicionar")).toBeInTheDocument();
});

test("add tarefa", () => {
  render(<ListaDeTarefas />);

  const input = screen.getByPlaceholderText("Digite uma tarefa");
  const botao = screen.getByText("Adicionar");

  fireEvent.change(input, { target: { value: "Estudar testes" } });

  fireEvent.click(botao);

  expect(screen.getByText("Estudar testes")).toBeInTheDocument();
});

test("impedir tarefas vazias", () => {
  render(<ListaDeTarefas />);
  const botao = screen.getByText("Adicionar");

  fireEvent.click(botao);

  // Aqui a verificação pode ser se nenhum <li> foi adicionado
  expect(screen.queryAllByRole("listitem").length).toBe(0);
});

test("Múltiplas tarefas", () => {
  render(<ListaDeTarefas />);

  const input = screen.getByPlaceholderText("Digite uma tarefa");
  const botao = screen.getByText("Adicionar");

  fireEvent.change(input, { target: { value: "Lavar Louça" } });
  fireEvent.click(botao);

  fireEvent.change(input, { target: { value: "Fazer café" } });
  fireEvent.click(botao);

  expect(screen.getByText("Lavar Louça")).toBeInTheDocument();
  expect(screen.getByText("Fazer café")).toBeInTheDocument();
});
