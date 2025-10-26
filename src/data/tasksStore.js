let tasks = [];
let nextId = 1;

function getAll() {
    return tasks;
}

function getById(id) {
    return tasks.find(t => t.id === id) || null;
}

function create({ title, description }) {
    const task = { id: nextId++, title, description: description || '', status: 'PENDING' };
    tasks.push(task);
    return task;
}

function update(id, { title, description, status }) {
    const task = getById(id);
    if (!task) return null;
    if (title !== undefined) task.title = title;
    if (description !== undefined) task.description = description;
    if (status !== undefined) task.status = status;
    return task;
}

function remove(id) {
    const before = tasks.length;
    tasks = tasks.filter(t => t.id !== id);
    return tasks.length !== before;
}

module.exports = { getAll, getById, create, update, remove };