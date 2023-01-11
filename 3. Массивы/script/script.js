//1. Сделать собственные примеры методов применяемых для массивов.

//метод join
var group1 = ["Alina", "Max", "Diana", "Yevhen"];
var changed_array = group1.join("; "); //возвращает Group: Alina; Max; Diana; Yevhen
console.log("Group: " + changed_array);

//метод concat
var group2 = ["Ivan", "Karina", "Lena", "Vlad"];
var groupNext = group1.concat(group2); //возвращает Group: Alina, Max, Diana, Yevhen, Ivan, Karina, Lena, Vlad
console.log("Group: " + groupNext.join(", "));

//метод slice
var sampleGroup = groupNext.slice(2, 4);//возвращает Diana,Yevhen
console.log(sampleGroup);

sampleGroup  = groupNext.slice(5);//возвращает Karina,Lena,Vlad
console.log(sampleGroup);

sampleGroup  = groupNext.slice(1, -1);//возвращает Max,Diana,Yevhen,Ivan,Karina,Lena
console.log(sampleGroup);

//метод sort
groupNext.sort();//возвращает Alina,Diana,Ivan,Karina,Lena,Max,Vlad,Yevhen
console.log(groupNext);

//метод splice
var del = groupNext.splice(5, 2); 
console.log("Удалены: " + del);//Max,Vlad
console.log("Остались: " + groupNext);//Alina,Diana,Ivan,Karina,Lena,Yevhen

groupNext.splice(1, 0, "Alex", "Olga", "Den"); //Alina,Alex,Olga,Den,Diana,Ivan,Karina,Lena,Yevhen
console.log("После вставки: " + groupNext);

//метод reverse
var groupNext2 = groupNext.reverse();  //Yevhen! Lena! Karina! Ivan! Diana! Den! Olga! Alex! Alina
console.log(groupNext2.join("! "));

//метод push
var cars = ["Toyota", " Mercedes-Benz", "BMW", "Honda", "Volkswagen", "Ford"];
console.log("Исходный массив: " + cars);
console.log("Размер массива: " + cars.length);//6

var new_length = cars.push("Hyundai", "Audi", "Porsche", "Nissan");
console.log("После добавления: " + cars);//Toyota, Mercedes-Benz,BMW,Honda,Volkswagen,Ford,Hyundai,Audi,Porsche,Nissan
console.log("Размер массива: " + new_length);//10

//методы pop
var deleteElement = cars.pop(1);
console.log("Массив после удаления: " + cars);//Toyota, Mercedes-Benz,BMW,Honda,Volkswagen,Ford,Hyundai,Audi,Porsche
console.log("Размер массива: " + cars.length);//9
console.log("Удаленный элемент: " + deleteElement);//Nissan

//методы unshift
var new_length2 = cars.unshift("Subaru");
console.log("После добавления: " + cars);// Subaru,Toyota, Mercedes-Benz,BMW,Honda,Volkswagen,Ford,Hyundai,Audi,Porsche
console.log("Размер массива: " + new_length2);//10

//методы shift
var delete_value = cars.shift();
console.log("Удаленное значение: " + delete_value);//Subaru
console.log("Массив после удаления: " + cars);//Toyota, Mercedes-Benz,BMW,Honda,Volkswagen,Ford,Hyundai,Audi,Porsche

//2. Определить элементы массива и вывести их значения, индексы которых лежит в указанном пределе. Предел вводит пользователь.
var dogs = ["Чихуахуа", "Бигль", "Пудель", "Мопс", "Ротвейлер", "Такса", "Пекинес", "Доберман", "Шарпей", "Бультерьер", "Шелти"];
var num1 = +prompt("Введите индекс начала масива (от 0 до 10): ");
var num2 = +prompt("Введите индекс конца масива (от 0 до 10): ");
var dogs_array = dogs.slice(num1, num2);
console.log("Вы выбрали: " + dogs_array);

//3. Отсортировать массив на 10 чисел в порядке возростания. Значения принимаются от пользователя. Сортировка осушествляется методом sort().
var array = new Array(10);
for (var i = 0; i < array.length; i++) {
        array[i] = +prompt("Введите 10 рандомных чисел: ");
    } 
console.log("Отсортированый масив чисел: " + array.sort());

//4.Создать программу, выполняющую вставку элемента в массив после элемента, значение которого укажет пользователь
var array_element = prompt("Введите породу собаки: ");
var num = +prompt("Введите индекс, после которого необходимо вставить элемент в масив: ");
dogs.splice(num, 0, array_element);
console.log("После вставки: " + dogs);

//5. Необходимо получить предпоследний элемент из массива month и вывести его на экран.(тремя способами)
var month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]

//1-й способ
var index = month[month.length - 2];
console.log(index);

//2-й способ, если знаем индекс элемента
console.log(month[10]);

//3-й способ
var lastButOneElem = month.splice(-2, 1);
console.log(lastButOneElem);

//6. Создать два произвольных массива: один массив - любимая спортивная команда / модели автомобилей / города, 
//во втором - количество игроков в команде / объем двигателя / количество жителей в городе. 
//Объединить данные из двух массивов и вывести их в одну строку.

var array_team = ["Бавария", "Ливерпуль", "Манчестер Сити", "Реал Мандрид", "Челси", "Барселона", "ПСЖ", "Ювентуз", "Манчестер Юнайтед", "Атлетико М"]
var array_goal = [138, 134, 134, 124, 123, 117, 112, 107, 105, 105];
var newArray = [];

for (let i = 0; i < array_team.length; i++) {
    newArray.push(`${array_team[i]} - ${array_goal[i]}`);
}
console.log(newArray.join(";" + '\n'));