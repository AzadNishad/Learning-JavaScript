document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById("todo-input");
    const addTsakBtn = document.getElementById("add-task-btn");
    const todoList = document.getElementById("todo-list");

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(task => renderTask(task));

    addTsakBtn.addEventListener("click", () => {
        const taskText = input.value.trim();

        if (taskText === "") return;

        const newTask = {
            id: Date.now(),
            task: taskText,
            completed: false
        };

        tasks.push(newTask);
        saveTasks();
        renderTask(newTask);
        input.value = ''
    })

    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function renderTask(task) {
        const li = document.createElement('li');
        li.setAttribute('data-id', task.id);
        if(task.completed) li.classList.add("completed")
        li.innerHTML = `
        <span>${task.task}</span>
        <button>Delete</button>
        `;

        li.addEventListener('click', e => {
            if(e.target.tagName === 'BUTTON') return;
            task.completed = !task.completed;
            li.classList.toggle('completed');
            saveTasks();
        })

        li.querySelector("button").addEventListener('click', e => {
            e.stopPropagation();
            const taskId = li.getAttribute('data-id');
            tasks = tasks.filter(t => t.id !== Number(taskId));
            li.remove();
            saveTasks();
        })

        todoList.appendChild(li);
    }

})