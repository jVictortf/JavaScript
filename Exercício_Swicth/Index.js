let distanciaAL = prompt('Digite a distancia em Anos-Luz')
let chosendistance = prompt('Para qual unidade deseja converter a distancia? \n1-Parsec(PC) \n2-Unidade Astronômica(AU) \n3-Quilometros(Km/s)')
let unidade
let conversao
switch (chosendistance) {
    case '1':
        unidade = 'Parsec'
        conversao = distanciaAL * 0.306601 
        break;
    case '2':
        unidade = 'Unidade Astronômica'
        conversao = distanciaAL * 63241.1 
        break;
        case '3':
            unidade = 'Quilometros'
            conversao = distanciaAL * 9.5 * Math.pow(10,12) 
            break;
    default:
        unidade = 'Unidade não encontrada'
        conversao = 'Conversão fora do escopo'
        break;
}
alert(`Distancia em anos-luz: ${distanciaAL} \nDistancia em ${unidade}: ${conversao}`)
