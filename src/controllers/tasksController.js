const store = require('../data/tasksStore');

class TasksController {
    createTask(req, res) {
        const { title, description } = req.body;
        if (!title) return res.status(400).json({ message: 'Title is required' });
        const task = store.create({ title, description });
        return res.status(201).json(task);
    }

    getTasks(req, res) {
        return res.json(store.getAll());
    }

    getTaskById(req, res) {
        const id = Number(req.params.id);
        const task = store.getById(id);
        if (!task) return res.status(404).json({ message: 'Task not found' });
        return res.json(task);
    }

    updateTask(req, res) {
        const id = Number(req.params.id);
        const { title, description, status } = req.body;
        const updated = store.update(id, { title, description, status });
        if (!updated) return res.status(404).json({ message: 'Task not found' });
        return res.json(updated);
    }

    deleteTask(req, res) {
        const id = Number(req.params.id);
        const deleted = store.remove(id);
        if (!deleted) return res.status(404).json({ message: 'Task not found' });
        return res.json({ message: 'Task deleted successfully' });
    }
}

module.exports = TasksController;