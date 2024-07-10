# To-Do List Application

This is a simple To-Do List application built with HTML, CSS, and JavaScript. The application allows users to add, delete, and save task. The tasks are stored in the browser's local storage, so they persist even after the browser is closed or the page is refreshed.


## Features

- Add new task
- Delete task
- Persist tasks using local storage


## Installation

1. Clone the repository:
```bash
git clone https://github.com/j1unyeong/To-do-list.git
```

2. Navigate to the project directory:
```bash
cd to-do-list
```


## Usage

1. Open the `index.html` file in your browser.
2. Add a new task by typing in the input field and clicking the "Add" button.
3. Delete a task by clicking the "Delete" button next to the task.


## Code Overview

### HTML

The HTML file contains the structure of the apllication, including the input field, add button, and the list of tasks.

### CSS

the CSS file provides basic styling for the application to make it visually appealing.

### JavaScript

The JavaScript file contains the functionality of the application:
- `DOMContentLoaded` event listener to load saved tasks from local storage.
- Event listener for the "add" button to add new tasks.
- Event listener for the "Delete" button to remove tasks.
- Functions to add tasks to the DOM, save task to local storage, and remove tasks from local storage.

### Functions

- `addTodoToDOM(todo)`: Adds a task to the DOM.
- `saveTodoToStorage(todo)`: Saves a task to local storage.
- `removeTodoFromStorage(id)`: Removes a task from local storage by its ID.


## Contributing

1. Fork the repository.
2. Create a new branch:
```bash
git checkout -b feature-branch
```
3. Commit your changes:
```bash
git commit -m 'Add some feature'
```
4. Push to the branch:
```bash
git push origin feature-branch
```
5. Open a pull request


## License

This project is licensed under the MIT License.