let parola = prompt ('inserisci la parola da controllare ')


function invertiParola(parl){
    let parolaInversa = parl.split('').reverse('').join('');  
    return parolaInversa;
}

let parolaInvertita = invertiParola(parola);


if(parola == parolaInvertita){
    console.log('la parola è palindroma');
} 

else {
    console.log('la parola non è palindroma');
}