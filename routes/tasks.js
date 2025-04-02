const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Get all tasks page
router.get('/', (req, res) => {
    Task.getAllTasks((err, tasks) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.render('tasks', { title: 'Tasks', tasks });
    });
});

// API Routes for CRUD operations
// Get all tasks
router.get('/api', (req, res) => {
    Task.getAllTasks((err, tasks) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(tasks);
    });
});

// Get single task
router.get('/api/:id', (req, res) => {
    Task.getTaskById(req.params.id, (err, task) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json(task);
    });
});

// Create task
router.post('/api', (req, res) => {
    Task.createTask(req.body, (err, id) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id });
    });
});

// Update task
router.put('/api/:id', (req, res) => {
    Task.updateTask(req.params.id, req.body, (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Task updated successfully' });
    });
});

// Delete task
router.delete('/api/:id', (req, res) => {
    Task.deleteTask(req.params.id, (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Task deleted successfully' });
    });
});

module.exports = router;