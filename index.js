// Aula 11 - 2:39:18 e Aula 12 - até 58:38 e a partir 2:22:56

const pesquisa = document.querySelector('.search input');
const lista = document.querySelector('ul');
const formAdd = document.querySelector('.add');
var toDos = [];

function addTodo(texto) {
    lista.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center"><span>${texto}</span><i class="far fa-trash-alt delete"></i></li>`
} 

formAdd.addEventListener('submit', e => {
    e.preventDefault();
    if (e.target.add.value.trim().length > 0) {
        addTodo(e.target.add.value.trim());
        toDos.push(e.target.add.value.trim());
        localStorage.setItem('lStoDos',JSON.stringify(toDos));
    }
    formAdd.reset();
})

lista.addEventListener('click', e => {
    if (e.target.tagName == 'I') {
        toDos.forEach((toDo, index) => {
            if (toDo == e.target.parentElement.innerText) {
                toDos.splice(index, 1);
            }
        });
        localStorage.setItem('lStoDos',JSON.stringify(toDos));
        e.target.parentElement.remove();
    }
})

document.addEventListener('keyup', e => {
    var lis = document.querySelectorAll('li');
    lis.forEach(li => {
        if (li.innerText.toLowerCase().includes(pesquisa.value.toLowerCase())) {
            li.classList.remove('filtered');
        } else {
            li.classList.add('filtered');
        }
    });
})

window.addEventListener('load', e => {
    toDos = [...JSON.parse(localStorage.getItem('lStoDos'))];
    console.log(toDos);

    toDos.forEach( toDo => {
        addTodo(toDo);
    })
})