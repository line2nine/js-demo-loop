function checkIfPrimeNumber(n) {
    if (n < 2)
        return false;
    for (let i = 2; i <= Math.sqrt(n); i++)
        if (n % i === 0)
            return false;
    return true;
}

function countPrimeNumber() {
    let num = document.getElementById("n").value;
    num = Number.parseInt(num);
    let count = 0;
    let n = 2;
    let result = "";
    while (count < num) {
        if (checkIfPrimeNumber(n)) {
            result += n + ",";
            count++;
        }
        n++;
    }
    document.getElementById("result").innerHTML = result;
}