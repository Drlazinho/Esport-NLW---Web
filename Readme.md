# Esport NLW - Encontre seu DUO - Versão Web

 uma plataforma que ajuda gamers a encontrar um parceiro ou parceira para jogar online seu game favorito, conectado a Twitch.

### Desenvolvimento
*   Reactjs - Typescript
*   Tailwind
*   Aplicação conectada ao Backend (clique aqui para ir ao repositório do backend)[]

### Tailwind
É uma biblioteca de customização e estilo css-first em frameworks.
Ela permite criar seus próprios padrões de estilo personalizados.
~~~~cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        galaxy: "url('/background-galaxy.png')",
        'nlw-gradient': ' linear-gradient(89.86deg, #9572FC 20.08%, #43E7AD 33.94%, #E1D55D 83.57%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%);'
      },
    },
  },
  plugins: [],
}
~~~~

### Components Form

Criada uma interface que pega todos os atributos padrão do form.

~~~~Typescript
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
~~~~