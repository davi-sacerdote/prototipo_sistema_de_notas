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

//Calculei a média da turma. atualizei com function 21/09/26
function media (soma,qtd) {
    const media = soma / qtd;
    return media
}

media

//mostrei a maior nota e mostrei a menor nota.
let notas = {

 maiorNota: AlunosEnotas[0][1],
 menorNota: AlunosEnotas[0][1],
 alunoMaiornota: AlunosEnotas[0][0],
 alunoMenornota: AlunosEnotas[0][0],

}
function maiorEmenorNota (notas) {
for(let i = 0; i<qtd; i++) {
    if (AlunosEnotas[i][1]>notas.maiorNota) {
        notas.maiorNota = AlunosEnotas[i][1]
        notas.alunoMaiornota = AlunosEnotas[i][0]
    }
    if (AlunosEnotas[i][1] < notas.menorNota) {
        notas.menorNota = AlunosEnotas[i][1]
        notas.alunoMenornota = AlunosEnotas[i][0]
    }
}
    console.log(`Maior nota da turma foi do/a aluno/a ${notas.alunoMaiornota} com a nota: ${notas.maiorNota.toFixed(2)}`)
    console.log(`Menor nota da turma foi do/a aluno/a ${notas.alunoMenornota} com a nota: ${notas.menorNota.toFixed(2)}`)
}

maiorEmenorNota(notas)

  //Parte 4: Situação dos alunos

  //Atualizei essa parte da linha 56-76 com dois objetos - 21:50 21/09/26
let Situação = {

 acimaMedia: 0,
 abaixoMedia: 0,
 exatamenteMedia: 0,
 aprovados: 0,
 reprovados: 0,
 tiraram10: 0,
 tiraram0: 0,
    
}
let faixa  = {

 entre0e3: 0,
 entre3e6: 0,
 entre6e8: 0,
 entre8e10:  0,

}

const mediadaTurma = media(soma,qtd)

function analisedosAlunos (Situação) {

    for (let i = 0; i<qtd; i++) {
        //contei quantos alunos ficaram acima da média.
        if(AlunosEnotas[i][1] > mediadaTurma) {
            Situação.acimaMedia++
        }
        //contei quantos ficaram abaixo da média.
        if(AlunosEnotas[i][1] < mediadaTurma) {
            Situação.abaixoMedia++
        }
        //contei quantos ficaram na média.
        if(AlunosEnotas[i][1] === mediadaTurma) {
            Situação.exatamenteMedia++
        }
        //contei quantos foram aprovados, considerando que a nota azul é nota >= 6.
        if(AlunosEnotas[i][1] >= 6 ) {
            Situação.aprovados++
        }
        //contei quantos foram reprovados, considerando que a nota vermelha é nota < 6.
        if(AlunosEnotas[i][1] < 6 ) {
            Situação.reprovados++
        }
        //contei quantos tiraram exatamente 10
        if(AlunosEnotas[i][1] === 10){
            Situação.tiraram10++
        }
        // contei quantos tiraram 0
        if(AlunosEnotas[i][1] === 0){
            Situação.tiraram0++
        }
    }
    
}
function faixas(faixa) {
    //vou contar quantos alunos tiraram de 0 ate 10, so que em intervalos menores
    for(let i = 0; i<qtd; i++)
    if (AlunosEnotas[i][1] < 3) {
        faixa.entre0e3++;
    } else if (AlunosEnotas[i][1] < 6) {
        faixa.entre3e6++;
    } else if (AlunosEnotas[i][1] < 8) {
        faixa.entre6e8++;
    } else {
        faixa.entre8e10++;
    }
    console.log(faixa.entre0e3 + ` tiraram entre 0 e 2.9`);
    console.log(faixa.entre3e6 + ` tiraram entre 3 e 5.9`);
    console.log(faixa.entre6e8 + ` tiraram entre 6 e 7.9`);
    console.log(faixa.entre8e10 + ` tiraram entre 8 e 10`);
}
    function situacoes (Situação) {
    console.log(Situação.acimaMedia + `ficarao acima da media da turma`);
    console.log(Situação.abaixoMedia + `ficarao abaixo da media da turma`);
    console.log(Situação.exatamenteMedia + ` ficaram exatamente na media`);
    console.log(Situação.aprovados + ` foram aprovados`);
    console.log(Situação.reprovados + ` foram reprovados`);
    console.log(Situação.tiraram10 + ` tiraram exatamente 10`);
    console.log(Situação.tiraram0 + ` tiraram exatamente 0`);
}
analisedosAlunos(Situação);
faixas(faixa)
situacoes(Situação);

// davi de manha, lembra de colocar o console.log pro aluno com a maior e a menor nota
// e é claro fazer o resto, falta pouco e vc consegue !) - 16/09/2026 - 00:43

// 21:08 de 17/09/26, acabei de terminar esse prototipo, eu sei que ta basico e no futuro espero que 
// eu realmente ache e encontre muitas formas de melhor isso daqui, porque significa que eu melhorei
// mas eu vou fazer varias versoes, para acompanhar minha evolucao em JS
// tomara que quando vc leie isso la no futuro, vc seja uma pessoa bem sucedida e eu sei que a gente vai fazer de tudo para ser
// acho que é isso - Davi de 16 anos


// 23:05 de 21/09/26, acabei de refazer usando objetos e funcoes, ahcei que ia demorar mais para eu refatorar mas foi ate que rapido
// e isso nao foi tao dificil como eu pensei, agora é continuar estudando e melhorando ele, ja imaginou no futuro a gente integrar com front-end hein?
// Versão 2 finalizada (ou podemos dizer que essa é a versao de lancamento e a outra com trocentas lets era  a beta rs)