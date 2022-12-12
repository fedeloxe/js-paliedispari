// let userSide = prompt('scegli pari o dispari')

// let userNumber = parseInt(prompt('inserisci un numero da 1 a 5'))
// console.log(userNumber)

// function generatedNumber(min,max){
//     let randomNumber= Math.floor(Math.random() * (max - min + 1)+ min)

//     return randomNumber
// }

// let min= 1
// let max= 5

// let pcNumber= generatedNumber(min,max);
// console.log(pcNumber)

// let somma= userNumber + pcNumber;
// console.log (somma)



// if(somma % 2===0 && userSide === 'pari'){
//     alert('Hai vinto')
// }

// else if(somma %2 !==0 && userSide === 'dispari'){
//     alert('hai vinto')

// }

// else{
//     alert('Hai perso')
// }

//-------------------------------------------bonus-----------------------
let bottone = document.getElementById("play");
bottone.addEventListener('click', function(){

    let userSide = document.getElementById("pari-dispari").value

    let userNumber =parseInt(document.getElementById("number").value) 
    console.log(userNumber)

    function generatedNumber(min,max){
        let randomNumber= Math.floor(Math.random() * (max - min + 1)+ min)
    
        return randomNumber
    }
    
    let min= 1
    let max= 5
    
    let pcNumber= generatedNumber(min,max);
    console.log(pcNumber)
    document.getElementById("num-pc").innerHTML = "il numero del computer è " + pcNumber
    
    let somma= userNumber + pcNumber;
    console.log (somma)
    document.getElementById("somma").innerHTML = "La somma dei numeri è " + somma

    
    
    
    if(somma % 2===0 && userSide == 1){
        document.getElementById("risultato").innerHTML ="Hai vinto"
        
    }
    
    else if(somma %2 !==0 && userSide == 2){
        document.getElementById("risultato").innerHTML ="Hai vinto"
        
    
    }
    
    else{
        document.getElementById("risultato").innerHTML ="Hai perso"  
    }

})






