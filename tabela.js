var row, cell, cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9, cell10, cell11, cell12;

document.getElementsByClassName('btn')[0].addEventListener('click', unesi);

function unesi() {
    let prvi = document.getElementById("prvi").value;
    let drugi = document.getElementById("drugi").value;
    let treci = document.getElementById("treci").value;
    let cetvrti = document.getElementById("cetvrti").value;
    let peti = document.getElementById("peti").value;
    let sesti = document.getElementById("sesti").value;
    let sedmi = document.getElementById("sedmi").value;
    let osmi = document.getElementById("osmi").value;
    let deveti = document.getElementById("deveti").value;
    let deseti = document.getElementById("deseti").innerText;
    console.log(typeof drugi);
    let date = new Date();
    let sat = date.getHours();
    let min = date.getMinutes();
    if (min < 10) {
        min = "0" + min;
    }
    let vreme = sat + ":" + min;

    let tabla = document.getElementById("tabla");
    row = tabla.insertRow(-1);
    cell = row.insertCell(0);
    cell1 = row.insertCell(1);
    cell2 = row.insertCell(2);
    cell3 = row.insertCell(3);
    cell4 = row.insertCell(4);
    cell5 = row.insertCell(5);
    cell6 = row.insertCell(6);
    cell7 = row.insertCell(7);
    cell8 = row.insertCell(8);
    cell9 = row.insertCell(9);
    cell10 = row.insertCell(10);
    cell11 = row.insertCell(11);
    cell12 = row.insertCell(12);

    cell.innerHTML = prvi;
    cell1.innerHTML = drugi;
    cell2.innerHTML = treci;
    cell3.innerHTML = cetvrti;
    cell4.innerHTML = peti;
    cell5.innerHTML = sesti;
    cell6.innerHTML = sedmi;
    cell7.innerHTML = osmi;
    cell8.innerHTML = deveti;

    /* `<form action="/action_page.php">
    <select name="zone" id="zone" class="zone" onchange="promena()">
      <option value="011" class="011">011</option>
      <option value="022" class="022">022</option>
      <option value="015">015</option>
      <option value="013">013</option>
    </select>
    </form>` */
    ;

    cell9.innerHTML = deseti;

    cell10.innerHTML = vreme;
    cell11.innerHTML = `<i style="cursor:pointer" onclick = "izbrisi(this)" class="fa fa-trash" aria-hidden="true"></i><br>
    <i style="cursor:pointer" onclick="edit(this)" class="fa fa-pencil-square-o" aria-hidden="true"></i><br>
    <i style="cursor:pointer" onclick="save(this)" class="fa fa-floppy-o" aria-hidden="true"></i>`;
    cell12.innerHTML = `<i class="fa fa-print" aria-hidden="true" id="klik" onclick="modalClick(this)"></i>`;

    cell11.className = 'cell11';

    doInsert();
}


function izbrisi(event) {
    let dugme = event.parentNode.parentNode.rowIndex;

    document.getElementById("tabla").deleteRow(dugme);

}

function edit(event) {
    let dugme = event.parentNode.parentNode.rowIndex;
    let tr = document.getElementsByTagName("tr");

    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td");
        console.log(td);
        for (let j = 0; j < td.length; j++) {
            if (tr[i].rowIndex == dugme) {
                td[0].contentEditable = 'true';
                td[1].contentEditable = 'true';
                td[2].contentEditable = 'true';
                td[3].contentEditable = 'true';
                td[4].contentEditable = 'true';
                td[5].contentEditable = 'true';
                td[6].contentEditable = 'true';
                td[7].contentEditable = 'true';
            }
        }

    }

}

function save(event) {
    let dugme = event.parentNode.parentNode.rowIndex;
    let tr = document.getElementsByTagName("tr");

    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td");
        console.log(td);
        for (let j = 0; j < td.length; j++) {
            if (tr[i].rowIndex == dugme) {
                td[0].contentEditable = 'false';
                td[1].contentEditable = 'false';
                td[2].contentEditable = 'false';
                td[3].contentEditable = 'false';
                td[4].contentEditable = 'false';
                td[5].contentEditable = 'false';
                td[6].contentEditable = 'false';
                td[7].contentEditable = 'false';
            }
        }

    }

}


var modal = document.getElementById("myModal");
var text = document.getElementById("text");
var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");

function modalClick(event) {
    let dugme = event.parentNode.parentNode.rowIndex;
    let tr = document.getElementsByTagName("tr");

    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td");
        for (let j = 0; j < td.length; j++) {
            if (tr[i].rowIndex == dugme) {
                text.innerHTML = td[1].innerText;
                text1.innerHTML = td[2].innerText;
                text2.innerHTML = td[3].innerText;

                modal.style.display = "block";
            }
        }
    }
}

/* Zatvori modal */
var zatvori = document.getElementsByClassName("close")[0];
var modal = document.getElementById("myModal");

zatvori.onclick = function() {
    modal.style.display = "none";
}

/* Search funkcija */
function search() {
    var input, filter, table, tr, i, j, column_length, count_td;
    column_length = document.getElementById('tabla').rows[0].cells.length;
    input = document.getElementById("searchbar");
    filter = input.value.toUpperCase();
    table = document.getElementById("tabla");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) { // except first(heading) row
        count_td = 0;
        for (j = 0; j < column_length - 1; j++) { // except first column
            td = tr[i].getElementsByTagName("td")[j];
            /* ADD columns here that you want you to filter to be used on */
            if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    count_td++;
                }
            }
        }
        if (count_td > 0) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }

}


function zona() {
    let ispis = document.getElementById('zone').value;
    document.getElementById('deseti').innerHTML = ispis;
}






document.writeln("<script type='text/javascript' src='ajax.js'></script>");