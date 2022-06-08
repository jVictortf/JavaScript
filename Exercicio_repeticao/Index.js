let shipname = prompt('Bem-vindo Piloto, qual nave vamos pilotar hoje?')
let letra = 'o'
let newship = ''
for(let i = shipname.length - 1; i >= 0; i--)
if(shipname[i] == letra){
    break
}else{
    newship += shipname[i]
}
alert(`Nome da nave: ${shipname} \nNome Invertido: ${newship}`)