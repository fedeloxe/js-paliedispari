let userSide = prompt('scegli pari o dispari')

let userNumber = parseInt(prompt('inserisci un numero da 1 a 5'))
console.log(userNumber)

function generatedNumber(min,max){
    let randomNumber= Math.floor(Math.random() * (max - min + 1)+ min)

    return randomNumber
}

let min= 1
let max= 5

let pcNumber= generatedNumber(min,max);
console.log(pcNumber)

let somma= userNumber + pcNumber;
console.log (somma)



if(somma % 2===0 && userSide === 'pari'){
    alert('Hai vinto')
}

else if(somma %2 !==0 && userSide === 'dispari'){
    alert('hai vinto')

}

else{
    alert('Hai perso')
}