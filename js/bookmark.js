
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
