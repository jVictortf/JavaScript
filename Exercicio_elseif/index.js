var piloto = prompt('Insira seu nome,Piloto:')
var velocidade = 0
var novavelo = prompt ('Qual velocidade quer que a nave chegue?')
var confirmvelo = confirm (`A velocidade atual é ${novavelo}Km/s`)
if(confirmvelo){
    velocidade = novavelo
}
if(velocidade <= 0){
    alert("Nave parada,considere partir a aumentar a velocidade")
}else if(velocidade < 40){
    alert('Você está devagar,podemos aumentar a velocidade!')
}else if(velocidade < 80){
    alert('Velocidade boa, mantenha a velocidade!')
} else if(velocidade < 100){
    alert('Velocidade alta. Considere diminuir')
}else{
    alert('Velocidade perigosa. controle automático ativo!')
}

alert(`Piloto: ${piloto}\nVelocidade atual: ${novavelo}Km/s`
)
