var plotis = 10;
var aukstis = 5;
perimetras = plotis + aukstis;
plotas = plotis * aukstis;
istrizaine = Math.sqrt((plotis ** 2 + aukstis ** 2))
console.log("Staciakampio krastine aukstis: " + aukstis)
console.log('Staciakampio krastines plotis: ' + plotis)
console.log('Staciakampio perimetras: ' + perimetras)
staciakampioPlotas = 'Staciakampio plotas: ' + plotas;
console.log('Staciakampio istrizaine: ' + istrizaine);

var elementas = document.getElementById('para');
elementas.innerHTML = staciakampioPlotas;