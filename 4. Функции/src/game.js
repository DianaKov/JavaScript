//3.  Создать игру "Камень-Ножницы-Бумага".
// Выбор компьютера определяется строкой: "var computerChoice = Math.random(); alert(computerChoice);".
//Math.random() выдает произвольное число в промежутке от 0 до 1, на основании этого можно построить принцип выбора решения компьютера.

var userChoice = prompt('Игра: "Камень-Ножницы-Бумага". Ведите Ваш выбор: \n 1. Камень \n 2. Ножницы \n 3. Бумага');
var computerChoice = Math.round(Math.random()*90);

function game (userChoice, computerChoice){
    
    if(userChoice == 1){
        userChoice = String("Камень");
        document.write("Ваш выбор " + userChoice + "<br />");
    } else if(userChoice == 2){
        userChoice = String("Ножницы");
        document.write("Ваш выбор " + userChoice + "<br />");
    } else if(userChoice == 3){
        userChoice = String("Бумага");
        document.write("Ваш выбор " + userChoice + "<br />");
    }else{
        document.write("Введите 1, 2 или 3 + <br />");
    }

    if (computerChoice < 30){
        computerChoice = String("Камень");
        document.write("Выбор компьютера: " + computerChoice + "<br />");
    }
    if (computerChoice < 60){
        computerChoice = String("Ножницы");
        document.write("Выбор компьютера: " + computerChoice + "<br />");
    }
    if (computerChoice < 91){
        computerChoice = String("Бумага");
        document.write("Выбор компьютера: " + computerChoice + "<br />");
    }

    
    if(userChoice == "Камень" && computerChoice == "Ножницы"){
        document.write("Вы выиграли!<br />")
    } else if(userChoice == "Камень" && computerChoice == "Бумага"){
        document.write("Победа компьютера<br />")
    }else if (userChoice == "Камень" && computerChoice == "Камень"){
        document.write("Ничья, попробуйте еще раз)<br />")
    }else if(userChoice == "Ножницы" && computerChoice == "Ножницы"){
        document.write("Ничья, попробуйте еще раз)<br />")
    } else if(userChoice == "Ножницы" && computerChoice == "Бумага"){
        document.write("Вы выиграли!<br />")
    }else if (userChoice == "Ножницы" && computerChoice == "Камень"){
        document.write("Победа компьютера <br />")
    }else if(userChoice == "Бумага" && computerChoice == "Камень"){
        document.write("Вы выиграли!<br />")
    } else if(userChoice == "Бумага" && computerChoice == "Ножницы"){
        document.write("Победа компьютера<br />")
    }else if (userChoice == "Бумага" && computerChoice == "Бумага"){
        document.write("Ничья, попробуйте еще раз)<br />")
    }
}

game(userChoice, computerChoice);