var cognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];

var  nuovo = prompt('cognome');
var nuovo_1 = nuovo[0].toUpperCase() + nuovo.substr(1).toLowerCase();
cognomi.push(nuovo_1);

var cognomi_2 = cognomi.sort();
console.log(cognomi_2);

console.log(1 + cognomi_2.indexOf(nuovo_1));

console.log(nuovo_1);

