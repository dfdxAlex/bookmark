function searchDataLink()
{
    // найти все элементы, в которых есть data-class
    // find all elements that have data-class
    let mas = document.querySelectorAll("[data-class]");
    let tegA;

    // find the div for the bookmarks bar
    // находим див для панели закладок
    let tegDivPanel = document.getElementsByClassName("panel");

      for (let elem of mas) {
         // elem contains one of the elements in the array, which holds 
         // the list of required buttons.
         // elem содержит один из елементов в массиве, в котором хранится
         // список необходимых кнопок.

         // define the data-n of the current bookmark
         // определяем data-n текущей закладки
         let select = '[data-n="'+elem.id+'"]';
         // try to select an element with this date attribute
         // пробуем выбрать элемент с таким дата атрибутом
         let dataN = document.querySelector(select);
         // check if we managed to select an element by this
         // attribute date
         // if successful, then the button is already there, exit the iteration
         // проверяем удалось ли выбрать элемент по такому
         // дата атрибуту
         // если удалось, значит кнопка уже есть, выходим из итерации
         if (dataN!=null) continue;

         // создаем кнопку button
         // create button
         tegA = document.createElement("button");
         // add a class attribute to the button, for styling
         // добавляем кнопке атрибут class, для стилизации
         tegA.setAttribute("class", "bottomJs");
         // add data attribute data-n and put id into it
         // element clicked to create a bookmark
         // добавляем дата-атрибут data-n и помещаем в него id 
         // елемента, по которому клацнули для создания закладки
         tegA.setAttribute("data-n", elem.id);
         // create an anchor link for a specific button
         // создаем ссылку на якорь для конкретной кнопки
         tegA.setAttribute("formaction", "#"+elem.id);
         // add button to div with utility class class="panel"
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
