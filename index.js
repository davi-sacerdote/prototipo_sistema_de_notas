const rl = require('readline-sync')

   //Parte 1: Entrada
//Criei um vetor para armazenar as notas.
const AlunosEnotas= []
const qtd = Number(rl.question(`Quantos alunos e suas notas vc quer colocar `))

//Pedi pro usuário para digitar cada nota.
//e guardei cada nota na posição correta usando duas colunas (a 0 para os alunos e a 1 pra mostrar as notas ).
for(let i = 0; i<qtd; i++){
    AlunosEnotas[i] = []

    AlunosEnotas[i][0] = String(rl.question("Digite o nome do aluno: "));
    AlunosEnotas[i][1] = Number(rl.question(`Digite a nota do aluno ${AlunosEnotas[i][0]}: `));
}
//Parte 2: Exibição
//Mostrei todas as notas digitadas e os respectivos alunos
console.table(AlunosEnotas);

//Parte 3: Cálculos
//Calculei a soma de todas as notas.
let soma = 0

for (let i = 0; i<qtd; i++) {
    soma += AlunosEnotas[i][1]     
}
console.log(`soma das notas da turma: ${soma.toFixed(2)}`)

//Calculei a média da turma.
const media = soma / qtd;
console.log(`Média das notas da turma: ${media.toFixed(2)} `)


//mostrei a maior nota e mostrei a menor nota.
let maiorNota = AlunosEnotas[0][1];
let menorNota = AlunosEnotas[0][1];
let alunoMaiornota = AlunosEnotas[0][0]
let alunoMenornota = AlunosEnotas[0][0]
for(let i = 0; i<qtd; i++) {
    if (AlunosEnotas[i][1]>maiorNota) {
        maiorNota = AlunosEnotas[i][1]
        alunoMaiornota = AlunosEnotas[i][0]
    }

    if (AlunosEnotas[i][1] < menorNota) {
        menorNota = AlunosEnotas[i][1]
        alunoMenornota = AlunosEnotas[i][0]
    }
}

console.log(`Maior nota da turma foi do/a aluno/a ${alunoMaiornota} com a nota: ${maiorNota.toFixed(2)}`)
console.log(`Menor nota da turma foi do/a aluno/a ${alunoMenornota} com a nota : ${menorNota.toFixed(2)}`)

  //Parte 4: Situação dos alunos

let acimaMedia = 0
let abaixoMedia = 0
let exatamenteMedia = 0
let aprovados = 0
let reprovados = 0
let tiraram10 = 0
let tiraram0 = 0
let entre0e3 = 0
let entre3e6 = 0
let entre6e8 = 0
let entre8e10 = 0

for (let i = 0; i<qtd; i++) {
    //contei quantos alunos ficaram acima da média.
    if(AlunosEnotas[i][1] > media) {
        acimaMedia++
    }
    //contei quantos ficaram abaixo da média.
    if(AlunosEnotas[i][1] < media) {
        abaixoMedia++
    }
    //contei quantos ficaram na média.
    if(AlunosEnotas[i][1] === media) {
        exatamenteMedia++
    }
    //contei quantos foram aprovados, considerando que a nota azul é nota >= 6.
    if(AlunosEnotas[i][1] >= 6 ) {
     aprovados++
    }
    //contei quantos foram reprovados, considerando que a nota vermelha é nota < 6.
    if(AlunosEnotas[i][1] < 6 ) {
     reprovados++
    }
    //contei quantos tiraram exatamente 10
    if(AlunosEnotas[i][1] === 10){
        tiraram10++
    }
    // contei quantos tiraram 0
    if(AlunosEnotas[i][1] === 0){
        tiraram0++
    }
    //vou contar quantos alunos tiraram de 0 ate 10, so que em intervalos menores
    if (AlunosEnotas[i][1] < 3) {
    entre0e3++;
    } else if (AlunosEnotas[i][1] < 6) {
    entre3e6++;
    } else if (AlunosEnotas[i][1] < 8) {
    entre6e8++;
    } else {
    entre8e10++;
    }
}

console.log(`${acimaMedia} ficarao acima da media da turma`);
console.log(`${abaixoMedia} ficarao abaixo da media da turma`);
console.log(`${exatamenteMedia} ficaram exatamente na media`)


// davi de manha, lembra de colocar o console.log pro aluno com a maior e a menor nota
// e é claro fazer o resto, falta pouco e vc consegue !) - 16/09/2026 - 00:43

// 21:08 de 17/09/26, acabei de terminar esse prototipo, eu sei que ta basico e no futuro espero que 
// eu realmente ache e encontre muitas formas de melhor isso daqui, porque significa que eu melhorei
// mas eu vou fazer varias versoes, para acompanhar minha evolucao em JS
// tomara que quando vc leie isso la no futuro, vc seja uma pessoa bem sucedida e eu sei que a gente vai fazer de tudo para ser
// acho que é isso - Davi de 16 anos
