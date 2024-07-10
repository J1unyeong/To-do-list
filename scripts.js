document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    // Load saved todos
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    savedTodos.forEach(todo => addTodoToDOM(todo));

    addBtn.addEventListener('click', () => {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            const todo = { text: todoText, id: Date.now() };
            addTodoToDOM(todo);
            saveTodoToStorage(todo);
            todoInput.value = '';
        }
    });

    todoList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const li = e.target.closest('li');
            const todoId = li.dataset.id;
            removeTodoFromStorage(todoId);
            li.remove();
        }
    });

    function addTodoToDOM(todo) {
        const li = document.createElement('li');
        li.textContent = todo.text;
        li.dataset.id = todo.id;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }

    function saveTodoToStorage(todo) {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function removeTodoFromStorage(id) {
        let todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos = todos.filter(todo => todo.id !== Number(id));
        localStorage.setItem('todos', JSON.stringify(todos));
    }
});