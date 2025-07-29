import { render, screen, fireEvent } from "@testing-library/react";
import ListaDeDesejos from "./ListaDeDesejos";

test("render component ListaTarefas", () => {
  render(<ListaDeDesejos />);

  expect(screen.getByPlaceholderText("Adicione um desejo")).toBeInTheDocument();

  expect(screen.getByText("Salvar")).toBeInTheDocument();
});

test("salvar Desejo", () => {
  render(<ListaDeDesejos />);

  const input = screen.getByPlaceholderText("Adicione um desejo");
  const botao = screen.getByText("Salvar");

  fireEvent.change(input, { target: { value: "Item" } });

  fireEvent.click(botao);

  expect(screen.getByText("Item")).toBeInTheDocument();

  expect(input.value).toBe("");
});

test("valor vazio que não é adicionado", () => {
  render(<ListaDeDesejos />);

  const botao = screen.getByText("Salvar");

  fireEvent.click(botao);

  expect(screen.queryAllByRole("listitem").length).toBe(0);
});

test("adicionar multiplos desejos", () => {
  render(<ListaDeDesejos />);

  const input = screen.getByPlaceholderText("Adicione um desejo");
  const botao = screen.getByText("Salvar");

  fireEvent.change(input, { target: { value: "Bíblia" } });
  fireEvent.click(botao);

  fireEvent.change(input, { target: { value: "Boné" } });
  fireEvent.click(botao);

  expect(screen.getByText("Bíblia")).toBeInTheDocument();
  expect(screen.getByText("Boné")).toBeInTheDocument();
});

test("Itens some da lista", () => {
  render(<ListaDeDesejos />);

  const input = screen.getByPlaceholderText("Adicione um desejo");
  const botaoSalvar = screen.getByText("Salvar");

  fireEvent.change(input, { target: { value: "Bíblia" } });
  fireEvent.click(botaoSalvar);

  expect(screen.getByText("Bíblia")).toBeInTheDocument();

  const botaoRemover = screen.getByText("Remover");

  fireEvent.click(botaoRemover);

  expect(screen.queryByText("Bíblia")).not.toBeInTheDocument();
});
