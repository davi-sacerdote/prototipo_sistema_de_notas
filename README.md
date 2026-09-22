# 📚 Sistema de Notas

Um projeto desenvolvido em **JavaScript + Node.js** para praticar lógica de programação, arrays, objetos, funções, parâmetros e `return`.

Este projeto começou como um protótipo simples e foi refatorado conforme fui aprendendo novos conceitos em JavaScript.

## 🚀 Sobre o projeto

O programa permite cadastrar uma quantidade de alunos e suas respectivas notas.

A partir desses dados, o sistema calcula e apresenta informações como:

* 📋 Lista de alunos e notas
* ➕ Soma das notas da turma
* 📊 Média da turma
* 🏆 Maior nota e respectivo aluno
* 📉 Menor nota e respectivo aluno
* 📈 Alunos acima da média
* 📉 Alunos abaixo da média
* 🎯 Alunos exatamente na média
* ✅ Quantidade de aprovados
* ❌ Quantidade de reprovados
* 💯 Quantidade de alunos que tiraram 10
* 0️⃣ Quantidade de alunos que tiraram 0
* 📊 Distribuição das notas por faixas

## 🛠️ Tecnologias

* JavaScript
* Node.js
* `readline-sync`

## 📖 O que pratiquei

Durante o desenvolvimento, o projeto foi utilizado para estudar e praticar:

* Variáveis com `let` e `const`
* Arrays
* Arrays multidimensionais
* Estruturas `for`
* Estruturas condicionais `if / else if / else`
* Operadores de comparação
* Contadores e acumuladores
* Objetos
* Propriedades de objetos
* Funções
* Parâmetros e argumentos
* `return`
* Manipulação de objetos dentro de funções
* `console.table()`
* Organização e refatoração de código

## 🔄 Evolução do projeto

### 🧪 Versão 1 - Beta

A primeira versão foi construída enquanto eu ainda estava aprendendo os conceitos básicos de JavaScript.

Ela utilizava várias variáveis separadas para armazenar os contadores:

```js
let acimaMedia = 0
let abaixoMedia = 0
let aprovados = 0
let reprovados = 0
```

Funcionava, mas o código começou a ficar grande e repetitivo.

### 🚀 Versão 2 - Lançamento

Depois de estudar **objetos e funções**, refatorei o projeto.

Os contadores passaram a ser organizados em objetos:

```js
let Situação = {
    acimaMedia: 0,
    abaixoMedia: 0,
    exatamenteMedia: 0,
    aprovados: 0,
    reprovados: 0,
    tiraram10: 0,
    tiraram0: 0
}
```

Também comecei a dividir responsabilidades utilizando funções, como:

```js
media()
maiorEmenorNota()
analisedosAlunos()
faixas()
situacoes()
```

A ideia dessa versão não foi criar o código mais avançado possível, mas aplicar os conceitos que eu havia acabado de aprender.

## 📌 P
