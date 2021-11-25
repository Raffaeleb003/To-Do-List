
document.querySelector('input').addEventListener('keyup', function (event) {
    console.log(event.keyCode)
    if (event.keyCode === 13 && document.querySelector('input').value !== '') {
        addTodo();
    }
})

document.querySelector('#my-button').addEventListener('click', addTodo);

document.querySelectorAll('ul>li').forEach(function (todo) {
    todo.onclick = toggleTodo;
})


console.log('done');
function addTodo() {
    const input = document.querySelector('#todo').value;
    const todo = document.createElement('li');
    todo.innerHTML = input;
    todo.onclick = toggleTodo;
    console.log(todo);
    const list = document.querySelector('ul');
    list.appendChild(todo);
    document.querySelector('input').value = '';
}

function toggleTodo(event) {
    console.log('this is the clicked list element: ', event.target)
    const parent = event.target.parentNode;
    console.log(parent);
    parent.removeChild(event.target);
}