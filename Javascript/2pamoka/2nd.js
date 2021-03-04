var data = '2017-07-06 19:59:45';
var numeris = 'LRS123';
var nuvaziuotasKelias = 5000;
var laikas = 118;


var masyvasAuto = [data, numeris, nuvaziuotasKelias, laikas];
console.log(masyvasAuto);
var automobilioGreitis = ((3600 / 118) *5000 ) / 1000;
automobilioGreitis = automobilioGreitis.toFixed(2);
console.log(automobilioGreitis);
var kasNutiko = data + ' uzfiksuotas automobilis numeriu' + numeris + ' kuris per ' + laikas + ' sekundziu nuvaziavo ' + nuvaziuotasKelias + ' metru.';
console.log(kasNutiko);
document.getElementById('auto').innerHTML = kasNutiko;
var greitis = 'Uzfiksuotas automobilio greitis: ' + automobilioGreitis + ' km/h';
document.getElementById('auto1').innerHTML = greitis;
var ikeliu = 'As einu gatve';
document.getElementById('auto2').innerHTML = ikeliu;

var td = document.createElement('td');
td.innerText = 'labas rytas';
div.appendChild(td);