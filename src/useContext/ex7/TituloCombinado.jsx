import { useContext } from "react";
import { LanguageC, ThemeC } from "../..";

export default function TituloCombinado() {
  const { theme } = useContext(ThemeC);

  const { language } = useContext(LanguageC);

  let mensagem;

  if (language === "pt" && theme === "light") {
    mensagem = "Fundo branco, texto preto: Olá, Caio!";
  } else if (language === "pt" && theme === "dark") {
    mensagem = "Fundo preto, texto branco: Olá, Caio!";
  } else if (language === "en" && theme === "light") {
     mensagem = "Background white, black text: Hello, Caio!";
  } else {
    mensagem = "Background black, white text: Hello, Caio!"
  }

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#000",
        color: theme === "light" ? "#000" : "#fff",
        padding: "2rem",
        marginTop: "20px",
      }}
    >
      <p>{mensagem}</p>
    </div>
  );
}
