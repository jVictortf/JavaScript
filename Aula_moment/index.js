var datapartidadanave = prompt('Digite a data de partida Formato- DD/MM/YYYY')
var datapartida = moment(datapartidadanave,'DD/MM/YYYY')
var hoje = moment()
var datacerta = hoje - datapartida
var confirma = prompt('Selecione o como deseja receber a informação: \n1-Segundos\n2-Mintutos\n3-Horas\n4-Dia')
if(confirma == '1'){
    var segundos = Math.round(datacerta / 1000)
    alert(`tempo de vôo ${segundos} segundos`)
} else if(confirma == '2'){
    var minutos = Math.round(datacerta / 1000 / 60)
    alert(`tempo de vôo ${minutos} minutos`)
}else if(confirma == '3'){
    var horas = Math.round(datacerta / 1000 / 3600)
    alert(`tempo de vôo ${horas} horas`)
}else if(confirma == '4'){
    var dias = Math.round(datacerta / 1000 / 3600 / 24)
    alert(`tempo de vôo ${dias} dias`)
}else{
    alert('opção inválida')
}