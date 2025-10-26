function setRoutes(app) {
    const TasksController = require('../controllers/tasksController');
    const tasksController = new TasksController();

    app.post('/tasks', tasksController.createTask.bind(tasksController));
    app.get('/tasks', tasksController.getTasks.bind(tasksController));
    app.get('/tasks/:id', tasksController.getTaskById.bind(tasksController));
    app.put('/tasks/:id', tasksController.updateTask.bind(tasksController));
    app.delete('/tasks/:id', tasksController.deleteTask.bind(tasksController));
}

module.exports = setRoutes;