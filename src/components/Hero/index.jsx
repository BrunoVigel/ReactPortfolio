import { Header } from "../Header";
import "./style.css";
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'

export function Hero() {
  return (
    <>
      <div className="hero">
        <Header />
        <div className="container">
          <h1><Typewriter words={['Olá, eu sou o Bruno']} cursor cursorStyle='|' /></h1>
          <p>
            Olá! Meu nome é Bruno, tenho 22 anos e sou desenvolvedor FrontEnd.
            Apaixonado por aprender novas tecnologias e técnicas, pensando na
            funcionalidade das aplicações e na forma mais limpa de
            desenvolvê-las.
          </p>
          <button>Entre em contato</button>
        </div>
      </div>
    </>
  );
}
