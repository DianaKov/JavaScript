//2. Создать функцию, возводящую число в степень, число и сама степень вводится пользователем

let x = +prompt("Enter the number: ");
let n = +prompt("Enter degree: ");

function getExponentiate(x,n){
    if (n == 1) {
        return x;
    } else {
        return x * getExponentiate(x, n - 1);
    }
}
document.write(getExponentiate(x,n));