function searchDataLink()
{
    // найти все элементы, в которых есть data-class
    let mas = document.querySelectorAll("[data-class]");
    let tegA;

    // находим див для панели закладок
    let tegDivPanel = document.getElementsByClassName("panel");

      for (let elem of mas) {
         // elem содержит один из елементов в массиве, в котором хранится
         // список необходимых кнопок.

         // определяем data-n текущей закладки
         let select = '[data-n="'+elem.id+'"]';
         // пробуем выбрать элемент с таким дата атрибутом
         let dataN = document.querySelector(select);
         // проверяем удалось ли выбрать элемент по такому
         // дата атрибуту
         // если удалось, значит кнопка уже есть, выходим из итерации
         if (dataN!=null) continue;

         // создаем кнопку button
         tegA = document.createElement("button");
         // добавляем кнопке атрибут class, для стилизации
         tegA.setAttribute("class", "bottomJs");
         // добавляем дата-атрибут data-n и помещаем в него id 
         // елемента, по которому клацнули для создания закладки
         tegA.setAttribute("data-n", elem.id);
         // создаем ссылку на якорь для конкретной кнопки
         tegA.setAttribute("formaction", "#"+elem.id);
         // добавляем кнопку в div со служебным классом class="panel"
         tegDivPanel[0].append(tegA);
      }
}

// The function finds all the divs on the page and adds events to them
// Функция находит все дивы на странице и добавляет им события
function activeClick()
{   // Find all Div elements on the page    
    // Находим все элементы Div на странице
    let allDiv = document.body.getElementsByTagName("div");
    // loop through the elements and create an event.
    // when clicking on the Div, a link with a data attribute is inserted
    // проходим элементы и создаем событие. 
    // при клике на Div вставляется ссылка с дата-атрибутом
    for (let index of allDiv)
        index.addEventListener("click", event => {
        // adds a class to the div to mark
        // block - bookmark
        // добавляет класс в див для того, чтобы пометить 
        // блок - закладку
        index.setAttribute("data-class", "");

        // функция ищит закладки и создает кнопки
        searchDataLink();
        });
}


// function draws the given number of divs. Needed only for
// test solution.
// функция рисует заданное колличество дивов. Нужна лишь для
// тестирования решения.
function poleSquare(intDiv)
{
    for (let i=1; i<=intDiv; i++)
    {
        var newDiv = document.createElement("div");
        newDiv.innerHTML = "<h1>Div номер "+i+"</h1>";
        newDiv.id = "test"+i;
        document.body.append(newDiv);
    }
}
