var form = document.getElementById('form');
var ul = document.getElementById('unoder');


form.addEventListener('submit', Items );

ul.addEventListener('click',removeItem);

function Items(e){
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    if (newItem){
    var li = document.createElement('li');
    li.className = 'listItem';
    li.appendChild(document.createTextNode(newItem));
    ul.appendChild(li);

    var btn = document.createElement('INPUT');
    btn.setAttribute("type","submit");
    btn.setAttribute("Value","delete");
    btn.className = 'btn1';
    li.appendChild(btn);

    document.getElementById('item').value = null
    }
}
function removeItem(e){
    var li = e.target.parentElement;
    ul.removeChild(li);
}
