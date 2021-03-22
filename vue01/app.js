const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

function add(){
    const entered = inputEl.value;
    const listItemEl = document.createElement('li');
    listItemEl.textContent = entered;
    listEl.appendChild(listItemEl);
}

buttonEl.addEventListener('click', add);