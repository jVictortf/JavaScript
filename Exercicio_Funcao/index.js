let shipname = prompt('Bem Vindo Piloto, escolha a nave que vamos pilotar:')

let velocidade = 0

let options

function showmenu() {
    let escolha 
    while(escolha != '1' && escolha != '2' && escolha != '3' && escolha != '4'){
       escolha = prompt('Bem vindo ao COmputador de bordo o que deseja fazer? \n1-Acelerar nave em 5Km/s \n2-Desacelerar nave em 5km/s \n3-Mostrar dados da nave \n4-Fechar programa')
    }
    return escolha
}

function speedup(navevelo){
    let novavelo2 = navevelo + 5
    return novavelo2 
} 

function speeddown(navevelo){
    let novavelo2 = navevelo - 5
    if(novavelo2 < 0){
        novavelo2 = 0
    }
    return novavelo2
}

function bancodedados(name, navevelo){
    alert(`Espaçonave: ${name}  \nVelocidade: ${navevelo}Km/s`)
}

do{
    options = showmenu()
    switch(options){
    case '1':
        velocidade = speedup(velocidade)
    break
    case '2':
        velocidade = speeddown(velocidade)
        break
    case '3':
            bancodedados(shipname, velocidade)
            break
    default:
        alert('Encerrando computador de bordo! \nATÉ MAIS!')
    }
}while(options != '4')