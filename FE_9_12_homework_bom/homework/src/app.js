const rootNode = document.getElementById('root');

const todoItems = [
    { isDone: false, id: 12345, description: 'Todo 1' }
];
const zero = 0;

window.addEventListener('hashchange', event => handleHashChange(event.newURL), false);
window.onload = () => handleHashChange();

function showMainPage() {
    rootNode.innerHTML = `<div class="todo">
        <h1 class="mainH">Simple TODO application</h1>
        <button id='addTaskButton' class="mainB">Add new task</button>
        <div class="taskList"></div>
    </div>`;

    document.getElementById('addTaskButton').addEventListener('click', () => {
        window.location.hash = '#/addTask';
    });

    let taskId = Number(window.localStorage.getItem('taskId'));
    const taskList = document.querySelector('.taskList');

    while (taskId >= zero) {
        const task = JSON.parse(window.localStorage.getItem(`task_${taskId}`));
        if (task) {

            if (document.querySelector('.empty')) {
                rootNode.removeChild(document.querySelector('.empty'));
            }

            const div = document.createElement('div');
            div.className = 'forOneItem';
            const [edit, check, remove] = ['edit', 'check', 'remove'];

            div.innerHTML = `<img src="${task.isDone ? 'assets/img/done-s.png' : 'assets/img/todo-s.png'}" 
            class="${check}">
            <p class="${edit}">${task.description}</p>
            <img src="assets/img/remove-s.jpg" class="${remove}">`;

            div.addEventListener('click', (event) => {
                switch (event.target.className) {
                    case edit:
                        window.location.hash = `#/updateTask/${task.id}`;
                        break;
                    case check:
                        checkUncheckTask(taskList, div, task);
                        break;
                    case remove:
                        removeTask(taskList, div, task);
                        break;
                    default:
                        window.location.hash = '#/';
                }

            });
            taskList.appendChild(div);
        }
        taskId--;
    }

    addEmptyMessage(taskList);

}

function addEmptyMessage(taskList) {
    if (!taskList.children.length && !document.querySelector('.empty')) {
        const p = document.createElement('p');
        p.textContent = 'TODO is empty';
        p.className = 'empty';
        rootNode.appendChild(p);
    }
}
function removeTask(taskList, div, task) {
    taskList.removeChild(div);
    window.localStorage.removeItem(`task_${task.id}`);
    addEmptyMessage(taskList);
}

function checkUncheckTask(taskList, div, task) {
    task.isDone = true;
    window.localStorage.setItem(`task_${task.id}`, JSON.stringify(task));
    for (const el in div.children) {
        if (div.children[el].className === 'check') {
            div.children[el].setAttribute('src', 'assets/img/done-s.png');
        }
    }
    taskList.removeChild(div);
    taskList.appendChild(div);
}

function addUpdateTask(taskId) {
    let currentTask = window.localStorage.getItem(`task_${taskId}`);
    let taskDescription = '';
    if (currentTask) {
        currentTask = JSON.parse(currentTask);
        taskDescription = currentTask.description;
    }

    rootNode.innerHTML = `<div class="add">
        <h1>Add task</h1>
        <input type="text" class="inputValue" value=${taskDescription}>
        <div>
            <button class="addCanc">Cancel</button>
            <button class="addSave">Save changes</button>
        </div>
    </div>`;
    // handle Cancel button
    document.querySelector('.addCanc').addEventListener('click', () => {
        window.location.href = '#/';
    });
    //handle Save task button
    document.querySelector('.addSave').addEventListener('click', () => {
        const val = document.querySelector('.inputValue').value;
        currentTask ? updateTask(currentTask, val) : saveTask(val);
        window.location.hash = '#/';
    });
}

function updateTask(currentTask, description) {
    const storage = window.localStorage;
    currentTask.description = description;
    storage.setItem(`task_${currentTask.id}`, JSON.stringify(currentTask));
}

function saveTask(description) {
    const storage = window.localStorage;

    const task = {
        isDone: false,
        description: description
    }

    let id = storage.getItem('taskId');
    id = id ? Number(id) + 1 : zero;
    task.id = id;
    storage.setItem(`task_${id}`, JSON.stringify(task));
    storage.setItem('taskId', id);

}

function handleHashChange(url = window.location.href) {
    let hash = '';
    let taskId = '';
    const hash_location = url.indexOf('#');
    if (hash_location) {
        hash = url.substr(url.indexOf('#') + 1, url.length);
    }
    const slash_location = url.lastIndexOf('/');
    if (slash_location && hash_location && slash_location - 1 > hash_location) {
        taskId = url.substr(slash_location + 1, url.length);
        hash = url.substring(hash_location + 1, slash_location);

    }

    switch (hash) {
        case '/':
            showMainPage();
            break;
        case '/addTask':
            addUpdateTask();
            break;
        case '/updateTask':
            addUpdateTask(taskId);
            break;
        default:
            showMainPage();
    }
}

