let parola = prompt ('inserisci la parola da controllare ')



let parolaInvertita = invertiParola(parola);


function invertiParola(parola){
    let parolaInversa = parola.split('').reverse().join('');  
    return parolaInversa;
}

if(parola == parolaInvertita){
    console.log('la parola è palindroma');
} else {
    console.log('la parola non è palindroma');
}