//Chiedi all’utente il suo nome,
//poi chiedi il suo cognome,
//poi chiedi il suo colore preferito
//Infine scrivi sulla pagina nomecognomecolorepreferito21

// 1- RACCOLTA DATI E DEFIZIONE DELLE VARIABILI
// Chiedo all'utente il suo nome, cognome e colore preferito
const userName = prompt('Dimmi il tuo nome');
// console.log(userName);
const userLastname =prompt ('Dimmi il tuo cognome');
// console.log(userLastname);
const userFavoriteColor =prompt ('Dimmi il tuo colore preferito');
// console.log(userFavoriteColor);

// 2- LOGICA DELLA MIA APPLICAZIONE
// Costruisco il messaggio finale per l'utente
const userPassword = userName + userLastname + userFavoriteColor + 21;
// console.log(userPassword);

// 3- OUTPUT PER L'UTENTE
// Stampo in pagina
document.getElementById('password').innerHTML = userPassword;