const todoList = [
    {
        todo: 'clone repo for starter code',
        status: 'complete'
    },
    {
        todo: 'change the remote URL',
        status: 'complete'
    },
    {
        todo: 'follow part 2-6 instructions',
        status: 'started'
    },
    {
        todo: 'push your code to your own GitHub repo',
        status: 'started'
    }
];
const completedTodos = []; {
    for (const todo of todoList) {
        if (todo.status == 'complete') {
            completedTodos.push(todo)
        }
    }

    for (const todoObj of completedTodos) {
        ({ todo } = todoObj)
        console.log(todo)
    }
}