let dobracont = 0
let escolha = ''
let nave = prompt('Qual o nome da Nave, Piloto?')
escolha = prompt (`Deseja que a ${nave} entre em dobra espacial? \n1-Sim \n2-Não`)

while(escolha == '1'){
    dobracont += 1
    escolha = prompt (`Deseja que a ${nave} entre em dobra novamente? \n1-Sim \n2-Não`)
}
alert(`A Nave ${nave} entrou em dobra ${dobracont} vezes`)
