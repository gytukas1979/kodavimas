// Pradinis masyvas
var masyvas =[
    ['2017-01-01 12-00-00', 'LRS001', 5000, 100],
    ['2017-01-02 12-00-00', 'LRS002', 6000, 110],
    ['2017-01-03 12-00-00', 'LRS003', 7000, 120],
    ['2017-01-04 12-00-00', 'LRS004', 8000, 130],
    ['2017-01-05 12-00-00', 'LRS005', 9000, 140],
]

// sukuriamas naujas masyvas, kad dadeti greiti
var naujasMasyvas =[];

// Ciklas, kad uzpildyti naujaji masyva su greiciu
for (i = 0; i<masyvas.length; i++) {
    var greitis = 3600 / masyvas[i][3] * masyvas[i][2] / 1000;
    greitis = greitis.toFixed(0);
    masyvas[i].push(greitis);
    naujasMasyvas.push(masyvas[i]);
    
}

//Sukuriami leneteles stulpeliu pavadinimai
var stulpeliuPavadinimai = ['Data', 'Numeris', 'Kelias, m', 'Laikas, s', 'Greitis, km/h'];
naujasMasyvas.unshift(stulpeliuPavadinimai);


// Ciklas HTML sukurimui

var lentele = "";
for (i = 0; i < naujasMasyvas.length; i++) {
    lentele += '<tr>';
    for (j = 0; j < naujasMasyvas[i].length; j++) {
        lentele += '<td style="background-color:DodgerBlue;">' + naujasMasyvas[i][j] + '</td>';
    }
    lentele += '</tr>';
    
}
document.getElementById('lentele').innerHTML = lentele;

/*
var i,j;
var html = "";
for (i in naujasMasyvas) {
    html += '<tr>';
    for (j in naujasMasyvas[i]) {
        html += '<th>' + naujasMasyvas[i][j] + '</th>';
    }
    html += '</tr>';
}
document.getElementById('lentele').innerHTML = html;
*/
