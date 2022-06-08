alert("Bom dia,iremos seguir com alguns dados")
var nome1 = prompt('Diga seu nome: ')
var idade1 = Number (prompt('Diga sua idade: '))
alert('agora precisamos de outra pessoa')
var nome2 = prompt('Diga seu nome:')
var idade2 = Number(prompt('Diga sua idade: '))
var diferença = idade1-idade2
alert(`Olá ${nome1} você tem ${idade1} anos
Olá ${nome2} você tem ${idade2} anos

${nome1} tem exatamente ${diferença} anos de diferença de ${nome2}`)