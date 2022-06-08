// velocidade inial 150, tem que perder 20 km por segundo
function speeddown(velocity , printer){
    let desacelerar = 20
    while(velocity >0){
        printer(velocity)
        velocity -= desacelerar
    }
    alert('Nave partada!\nAs comportas podem ser abertas!\nPassageiros podem embarcar')

}
let printvelocity = velocity => {
alert(`Diminuindo a velocidade da nave, estamos a ${velocity} km/s`)
}

let newvelocity = speeddown(150,printvelocity)
