// let parola = prompt ('inserisci la parola da controllare ')


// function invertiParola(parl){
//     let parolaInversa = parl.split('').reverse('').join('');  
//     return parolaInversa;
// }

// let parolaInvertita = invertiParola(parola);


// if(parola == parolaInvertita){
//     console.log('la parola è palindroma');
// } 

// else {
//     console.log('la parola non è palindroma');
// }


//-------------------------------bonus------------------------
let bottone = document.getElementById('controlla');
bottone.addEventListener('click', function(){

    let parola = document.getElementById('parola').value 


    function invertiParola(parl){
        let parolaInversa = parl.split('').reverse('').join('');  
        return parolaInversa;
    }

    let parolaInvertita = invertiParola(parola);


    if(parola == parolaInvertita){
        document.getElementById('risultato').innerHTML = "la parola è palindroma"
    } 

    else {
        document.getElementById('risultato').innerHTML = "la parola non è palindroma"
    }

})

