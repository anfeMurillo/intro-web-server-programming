const request = require('supertest');
const app = require('../src/index'); // Adjust the path as necessary

describe('Tasks API', () => {
  let taskId;

  it('should create a new task', async () => {
    const res = await request(app)
      .post('/tasks')
      .send({
        title: 'Test Task',
        description: 'This is a test task'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    taskId = res.body.id; // Store the task ID for later tests
  });

  it('should get all tasks', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it('should get a task by ID', async () => {
    const res = await request(app).get(`/tasks/${taskId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', taskId);
  });

  it('should update a task', async () => {
    const res = await request(app)
      .put(`/tasks/${taskId}`)
      .send({
        title: 'Updated Task',
        description: 'This task has been updated'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('title', 'Updated Task');
  });

  it('should delete a task', async () => {
    const res = await request(app).delete(`/tasks/${taskId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Task deleted successfully');
  });
});