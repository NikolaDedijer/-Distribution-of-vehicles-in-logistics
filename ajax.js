//funkcija za insert u bazu
function doInsert() {

    /* cell1.id = "cell1";
    cell2.id = "cell2";
    cell3.id = "cell3";
    cell4.id = "cell4"; */

    var a = document.getElementById("prvi").value;
    var b = document.getElementById("drugi").value;
    var c = document.getElementById("treci").value;
    var d = document.getElementById("cetvrti").value;
    var e = document.getElementById("peti").value;
    var f = document.getElementById("sesti").value;
    var g = document.getElementById("sedmi").value;
    var h = document.getElementById("osmi").value;
    var m = document.getElementById("deveti").value;
    var n = document.getElementById("deseti").innerText;
    var y = document.getElementById("jedanaesti").value;

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "server.php", true);
    ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
            console.log(this.responseText);
    };

    ajax.send("prvi=" + a + "&drugi=" + b + "&treci=" + c + "&cetvrti=" + d + "&peti=" + e + "&sesti=" + f + "&sedmi=" + g + "&osmi=" + h + "&deveti=" + m + "&deseti=" + n + "&jedanaesti=" + y + "&do_insert=1");
    return false;
}