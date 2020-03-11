function multiTable() {
    let  result = "";
        for (let i = 1; i <= 9; i++) {
            result += "<tr>";
            for (let j = 1; j <= 9; j++)
                result += "<td>" + j + " x " + i + " = " + (j * i);
            result += "</td>";
            result += "</tr>";
        }
        document.getElementById("showMultiTable").innerHTML = result;
}