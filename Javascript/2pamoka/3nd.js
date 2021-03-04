var a = 5;
var b = 8;
var c = 3;
var spausdinti = 'negali susiformuoti';
if (a + b > c && a + c > b && b + c > a) {
    if ( a == b == c) {
        spausdinti = 'yra lygiasonis'
    } else {
        if (a == b || b == c || a == c) {
            spausdinti = 'yra lygiakrastis'
        } else {
            if (a**2 + b**2 == c ** 2 || a**2 + c**2 == b**2 | b**2 + c**2 == a**2) {
                spausdinti = 'yra status ir ivairiakrastis'
            } else {
                spausdinti = 'yra ivairiakrastis'
            }
        }
    }
} 

var uzrasas = 'Trikampio kurio krastines yra ' + a + ', ' + b + ' ir '+ c + ' ' + spausdinti + '.';
console.log(uzrasas);
document.getElementById('tekstas').innerHTML = uzrasas;
