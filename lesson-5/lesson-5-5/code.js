'use srict';

function chessGame() {

    var table = document.createElement("table");
    var arr = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    for (var i = 0; i < 8; i++) {
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.className = 'numb';
        td.innerHTML = 8 - i;
        tr.appendChild(td);

        for (var j = 0; j < 8; j++) {
            td = document.createElement('td');
            if (i % 2 == j % 2) {
                td.className = 'white';
            } else {
                td.className = 'black';
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    };

    tr = document.createElement('tr');

    for (i = 0; i < arr.length; i++) {
        td = document.createElement('td');
        td.className = 'numb';
        td.innerHTML = arr[i];
        tr.appendChild(td);
    };

    table.appendChild(tr);
    document.body.appendChild(table);

}

chessGame();