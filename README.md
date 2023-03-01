#  <img height=50 src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png"> JavaScript
В этом репозитории собраны задачи по курсу FrontEnd (JavaScript):
## 1. Введение в джава скрипт    
- [X] По координатам двух точек, которые вводит пользователь, определить уравнение прямой, проходящей через эти точки.
       Общий вид уравнения: y = kx + b; где k = (y1 - y2) / (x1 - x2), b = y2 - k*x2.
- [X] Обменять значения двух переменных, используя третью (буферную) переменную.
- [X] Объявите две переменные: admin и name. Запишите в name строку "Василий". Замените значение из name в admin. Выведите admin.
- [X] Получить от пользователя данные о пользователе: имя, фамилию, возраст. Обработать их и вывести на экран.
- [X] Запросите у пользователя его возраст, после чего выведите на экран модальное окно с вопросом: "Ваш возраст ...(введеное пользователем число) лет?".
    Далее в зависимости от выбора пользователя выводится модальное окно с информацией true или false.
    
## 2. Условные и циклические кострукции
- [X] Среди трех чисел найти среднее арифметическое. Если среди чисел есть равные, вывести сообщение "Ошибка". Числа принять от пользователя.
- [X] Построить прямоугольный треугольник состоящий из символа "*".
- [X] Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.
- [X] Дано два числа A и B где (A<B). 
       Выведите на экран суму всех чисел расположенных в числовом промежутке от А до В. 
       Выведите на экран все нечетные значения, расположенные в числовом промежутке от А до В. 
- [X] Вывести на экран ряд чисел Фибоначчи, состоящий из n элементов (n принять от пользователя).
       Числа Фибоначчи – это элементы числовой последовательности, в которой каждое последующее число равно сумме двух предыдущих.
- [X] Вывести на экран таблицу умножения от 0 до 9. 

## 3. Маcсивы
- [X] Сделать собственные примеры методов применяемых для массивов.
- [X] Определить элементы массива и вывести их значения, индексы которых лежит в указанном пределе. Предел вводит пользователь.
- [X] Отсортировать массив на 10 чисел в порядке возростания. Значения принимаются от пользователя. Сортировка осушествляется методом sort().
- [X] Создать программу, выполняющую вставку элемента в массив после элемента, значение которого укажет пользователь.
- [X] Необходимо получить предпоследний элемент из массива month и вывести его на экран. (3 способа);
    var month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
- [X] Создать два произвольных массива: один массив - любимая спортивная команда / модели автомобилей / города, 
    во втором - количество игроков в команде / объем двигателя / количество жителей в городе. 
    Объединить данные из двух массивов и вывести их в одну строку.

## 4. Функции 

### 4. Функции

- [X] Создать функцию calculate(operand1, operand2, sign), где operand1 и operand2 — два числа, sign — знак арифметической операции.
       Функция должна расчитывать результат операции, исходя из переданного ей знака. 
       Функция должна проверять корректность введенных чисел и знака операции.
       Все аргументы для функции принять от пользователя.
- [X] Создать игру "Камень-Ножницы-Бумага".
        Выбор компьютера определяется строкой:  
        "var computerChoice = Math.random();
        alert(computerChoice);".
        Math.random() выдает произвольное число в промежутке от 0 до 1, на основании этого можно построить принцип выбора решения компьютера.
- [X] Напишите функцию, которая возвращает n-е число Фибоначчи. Для решения используйте цикл.
    
### 4. Функции. Практика: сделать простой калькулятор
- [X] Создать простой калькулятор
    
### 4. Практика
- [X] Работа с табами

## 5. Обьекты Практика
- [X] Создать квитанцию платежа

- [X] Алгоритм взаимодействия с клиентом следующий:
В настройках этой программы необходимо вводить одну константу минимальную заработную плату, это где-то на административной части сайта, которая недоступна пользователю.
Вот несколько структурированный алгоритм взаимодействия
Выберите характер взыскания:
- [ ] Имущественное. Если имущественное то: введите сумму долга, которую необходимо взыскать,
    - [ ] если 2% от суммы долга меньше или равно 10 минимальным заработным платам то размер авансового взноса равен 2% от суммы, которую необходимо взыскать
    - [ ] если 2% от суммы долга больше 10 мин. заработных плат то сумма авансового взноса равна 10 минимальным заработным платам.

- [ ] Неимущественное
    - [ ] взыскателем является физическое лицо (гражданин) следствие размер авансового взноса 1 минимальная заработная плата программа рассчитывает
    - [ ] Взыскателем является юридическое лицо (предприятие, учреждение, организация) следствие размер авансового взноса 2 минимальные заработные платы программа рассчитывает
    
- [X] Создать массив, который будет хранить в себе информацию о сотрудниках предприятия. Каждый элемент масива — объект,
содержащий свойства: name, sName, age, occupation, и метод show, который выводит всю информацию о пользователе.
Реализовать заполнение массива пользователем. По окончанию заполнения — вывести информацию о сотрудниках.

## 6. Таймер для теста по JavaScript
- [X] Сверстать тест на 40 вопросов по JavaScript используя методологию БЕМ
- [X] Сделать таймер на 40 минут для теста

## 7.Работа с API
