import React from "react";
import ReactDOM from "react-dom/client";

import { createContext } from "react";
import ListaDeTarefas from "./test/ex5/ListaDeTarefas";
import ListaDeDesejos from "./test/ex6/ListaDeDesejos";

export const UsuarioContext = createContext();

export const SobrenomeContext = createContext();

export const NameContext = createContext();
export const LastNameContext = createContext();

export const ThemeContext = createContext();

export const LanguageContext = createContext();

export const ThemeContext2 = createContext();

export const ThemeC = createContext()
export const LanguageC =  createContext()

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*  UseState */}

    {/*  <App />
    <Ex2/>
    <Ex3/> 
    <Ex4/>
    <Ex5/>
    <Ex6/>
    <Ex7/>
    <Ex8/>
    <Ex9/>
    <Ex10/>
    <Ex11/>*/}

    {/*  UseEffect */}
    {/* <Ex1/> 
    <Ex2Ef/>
    <Ex3Ef/>
    <Ex4Ef/>
    <Ex5Ef/>
    <Ex6Ef/>
    <Ex7f/>
    <Ex8f/>
    <Ex9Ef/>
    <Ex10EF/>
    <Ex11Ef/>
    <Ex12Ef/>
    <CrudTarefa/>
    <AppExercise/>*/}

    {/*Props */}
    {/*<Card/>
    <ProdutoCard/>*/}

    {/*Router */}

    {/*<App/> 
    <AppR2/>*/}

    {/* useRef é um document.query.Selector */}
    {/* <Ex1/>
    <Ex2/>
    <Ex3/>
    <Ex4/>
    <Ex5/>
    <Ex6/>
    <Ex7/>
    <Ex8/>
    <Ex9/>
    <Ex10/>
    <Ex11/>
    <Ex12/>*/}

    {/*  useContext = parecido com props */}
    {/* <AppContextEx1/> 
    <AppContextEx2/>
    <AppContextEx3/>
    <AppContextEx4/>
    <AppContextEx5/>
    <AppContextEx6/>
    <AppContextEx7/>*/}

    {/* Testes */}
    <ListaDeTarefas/>
    <ListaDeDesejos/>
  </React.StrictMode>
);
