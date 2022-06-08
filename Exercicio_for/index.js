let ship = prompt('Olá, Piloto Qual Espaçonave deseja Pilotar hoje?')
let letra = prompt ('Para sua segurança, qual letra quer codificar?')
let newlet = prompt('Para qual letra quer codificar?')
let newship = ''
for(let i = 0 ; i < ship.length ; i++){
    if(ship[i] == letra){
        newship += newlet
    } else {
        newship += ship[i]
    }
}
alert(`O novo da nave é ${newship}`)