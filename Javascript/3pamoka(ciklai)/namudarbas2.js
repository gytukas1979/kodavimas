var masyvas =[
    ['2017-01-01 12-00-00', 'LRS001', 5000, 100],
    ['2017-01-02 12-00-00', 'LRS002', 6000, 110],
    ['2017-01-03 12-00-00', 'LRS003', 7000, 120],
    ['2017-01-04 12-00-00', 'LRS004', 8000, 130],
    ['2017-01-05 12-00-00', 'LRS005', 9000, 140],
]


for (var i = 0; i<masyvas.length; i++) {
    var greitis = Math.round((3600 / masyvas[i][3] * masyvas[i][2] / 1000));
    masyvas[i].push(greitis);
}
var table = document.querySelector('table');
for (var i = 0; i<masyvas.length; i++) {
    var tr = document.createElement('tr');
        for (var j = 0; j<masyvas[i].length; j++) {
            var td = document.createElement('td');
            td.innerText = masyvas[i][j];
            tr.appendChild(td);
        }
    table.appendChild(tr);

}