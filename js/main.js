var cognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];

var  nuovo = prompt('cognome');
cognomi.push(nuovo);
var cognomi_2 = cognomi.sort();
console.log(cognomi_2);

console.log(1 + cognomi_2.indexOf(nuovo));
