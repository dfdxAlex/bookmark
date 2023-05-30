function searchDataLink()
{

    let mas = document.getElementsByClassName("f");
    // let tegA;
    // tegA.setAttribute("Data-link", index.id);

      for (let elem of mas) {
         tegA = document.createElement("button");
         tegA.setAttribute("class", "bottomJs");
        // tegA.setAttribute("href", "");
        // console.log(elem.id);
        document.body.append(tegA);
      }
    // console.log(mas);
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
        index.setAttribute("class", "f");
        
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
