# NaveDex

# Sumário

- [Descrição](#Descrição)
- [Instalação](#Instalação)
- [Tecnologias](#Tecnologias)
- [Práticas](#Práticas)
- [Features](#Features)
- [API](#API)
- [Figma](#UI)
- [Desafio](#Desafio)
- [Autor](#Autor)
- [Licensa](#Licensa)

## Descrição

O propósito desde projeto consiste em desenvolver uma plataforma onde você poderá entrar em sua conta, ver, editar, deletar e criar Navers.

O padrão de estrutura utilizado foi o [Atomic Design](https://atomicdesign.bradfrost.com/) visando a escalabilidade e manutenabilidade.

## Instalação

Primeiro, comece rodando o seguinte comando no terminal:

```bash
npm run start
```

Então o browser irá abrir uma porta disponível no seu brawser.

## Tecnologias

- [ReactJS](https://reactjs.org/)
- [Axios](https://github.com/axios/axios)
- [Styled Components](https://styled-components.com/)
- [PropTypes](https://www.npmjs.com/package/prop-types)
- [React Hook Form](http://react-hook-form.com/)
- [ContextAPI](https://reactjs.org/docs/context.html)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [Polished](https://polished.js.org/docs/)
- [React Helmet](https://www.npmjs.com/package/react-helmet)

## Práticas

- Foi criado um componente para utilização de <head>s dinâmicos. Nesse componente se utiliza o [React Helmet](https://www.npmjs.com/package/react-helmet)
  e com ele é possível alterar título, imagens de compartilhamento, meta tags entre outros.
  
- Os Cars da Home foram desenvolvidos de uma forma que não permita ter muitas linhas de título e descrição para não acabar deixando o componente com altura excessiva (Uso da propriedade do css `line-clamp`).

- Foi utilizado o [Polished](https://polished.js.org/docs/) para poder usar diferentes tons de cores sem criar novas variáveis globais de cor para fácil troca de tema se necessário.

- As mensagens de erro foram centralizadas em um único arquivo para não haver mensagens de erro duplicadas e aumentar a facilidade na hora de criar novas.

## Features

Possíveis features a se considerar são:

- Telas Mobile.
- Página de registro.
- Documentação de componentes.
- Docker.
- Centralização de textos e funcionalidade multi-idiomas com i18n.


## API

Encontre a coleção do Postman contendo a API nesse [link](https://www.getpostman.com/collections/e6afe4028c2a1e56e577).

## UI

Econtre o layout do Figma nesse [link](https://www.figma.com/file/II8UDFm2uJFZaD0FOPcinP/Teste-Fornt-End).

## Desafio

Encontre o Naver lendário na home. (Para resetar apague a variável `RARE_NAVER_FOUND` encontrada no Local Storage).

## Autor

**Italo Pereira**.

Me encontre no [LinkedIn](https://www.linkedin.com/in/italo-pereira-59603815a/).

## Licensa

Esse projeto foi feito usando a [MIT License](https://github.com/matheus-neves/navedex/blob/master/LICENSE.md).
