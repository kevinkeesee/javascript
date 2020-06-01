const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

function addItem(){
    const inVal = input.value;
    input.value = '';

    const newLi = document.createElement('li');
    const newSpan = document.createElement('span');
    const newButton = document.createElement('button');

    newLi.appendChild(newSpan);
    newLi.appendChild(newButton);

    newSpan.textContent = inVal;
    newButton.textContent = 'Delete';

    document.querySelector('ul').appendChild(newLi);

    document.querySelector('input').focus();

    newButton.addEventListener('click', removeButton);

    function removeButton(){
        list.removeChild(newLi);
    }
}

button.addEventListener('click', addItem);