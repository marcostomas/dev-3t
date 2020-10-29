/* FOR EACH  

    var canais = ["Maria", "José", "João"]

    canais.forEach(function(canal){
        canais.push("RedeTV")
        console.log(canal)
    })

    console.log(canais)
*/


/* MAP

    var numeros = [1,2,3]

    var dobro = numeros.map(function(numero){
        return numero * 2
    })
    
    console.log(dobro)
*/


/*  MAP 2
    var nomes = ["Douglas","Marcos","André", "Carlos", "Aléxia"]

    var nomeMaisSobrenome = nomes.map(function(nome){ 
        return nome + " Silva"
    })

    console.log(nomeMaisSobrenome)
*/

/* FILTER

    var alunos = [
        {nome: 'Maria', idade: 11},
        {nome: 'José', idade: 12},
        {nome: 'João', idade: 18},
    ]

    var alunosDeMaior = alunos.filter(function(aluno){
        return aluno.idade >= 18
    })

    console.log(alunos)
    console.log(alunosDeMaior)
*/

/* FILTER 2

    var alunos = [
        {nome: 'Maria', idade: 11},
        {nome: 'José', idade: 12},
        {nome: 'João', idade: 18},
    ]

    var nomeDeAlunoMaiorQueQuatro = alunos.filter(function(aluno){
        return aluno.nome.length > 4
    })

    console.log(alunos)
    console.log(nomeDeAlunoMaiorQueQuatro)
*/

/* FIND

    const alunos = [
        {nome: 'Maria'},
        {nome: 'João'},
        {nome: 'José'}
    ]

    let aluno = alunos.find(aluno => aluno.nome === 'Mário')

    if(aluno){
        console.log(aluno)
    }else{
        console.log('Not Found')
        console.log(aluno)
    }
*/

/* SOME

    const pesoMalas = [12, 45, 30, 54]

    const temAlgumaMalaAcimaDoPeso = pesoMalas.some(pesoMala => pesoMala > 30)

    console.log(temAlgumaMalaAcimaDoPeso) //true
*/

/* BUSCA STRING (USANDO FILTER)

    const  frutas = ["Maçã","Abacaxi","Ameixa", "Banana", "Pêra"]

    const filtrarFrutas = (arr, query) => {
        return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
    }
  
    console.log(filtrarFrutas(frutas, 'm'))  // ['Maçã', 'Amaeixa']
    console.log(EsseMetodoEuFizMentiraCopiei_O_Outro(frutas, 'm'))  // ['Maçã', 'Amaeixa']
    console.log(filtrarFrutas(frutas, 'P'))  // [ 'Pêra' ]
    console.log(EsseMetodoEuFizMentiraCopiei_O_Outro(frutas, 'P'))  // [ 'Pêra' ]


    function EsseMetodoEuFizMentiraCopiei_O_Outro (NomeDoArray, oQueVoceQuerConsultar) {
        return NomeDoArray.filter(elemento => elemento.toLowerCase().indexOf(oQueVoceQuerConsultar.toLowerCase()) !== -1)
    }

*/

/* EVERY

    idadeAlunos = [18, 25, 12, 36, 45, 54]

    const todosOsAlunosMaiores = idadeAlunos.every(verificaIdade => verificaIdade < 18)


    if (todosOsAlunosMaiores){
        console.log(false) 
    }
    else{
        console.log(true)
    }

    console.log(todosOsAlunosMaiores) // false
*/

/* REDUCE
    const numeros = [1,2,3,4,5]

    let soma = 0

     soma = numeros.reduce(function(soma, numero){
         return soma + numero
     })

     soma = numeros.reduce((soma, numero) => soma + numero)

     const teste = numeros.reduce()
     console.log(teste) // 15

*/

/* REDUCE 2

    const numeros = ["A", "B", "C", "D", "E"]

    let soma

    soma = numeros.reduce(function(soma, numero){
        return soma + numero
    })

    soma = numeros.reduce((soma, numero) => soma + numero)

    console.log(soma) // ABCDE
*/