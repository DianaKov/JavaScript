const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsitem = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(onTabClick);

function onTabClick(item){
    item.addEventListener('click', function(){//вешаем клик на кнопки
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if(!currentBtn.classList.contains('active')){
            //убираем класс active
            tabsBtn.forEach(function(item){
                item.classList.remove('active');
            })

            tabsitem.forEach(function(item){
                item.classList.remove('active');
            })

            //добавляем класс active
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

//активное первое окно
document.querySelector('.tabs__nav-btn').click();
