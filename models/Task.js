const db = require('../config/database');

class Task {
    static getAllTasks(callback) {
        db.all('SELECT * FROM tasks ORDER BY created_at DESC', [], callback);
    }

    static getTaskById(id, callback) {
        db.get('SELECT * FROM tasks WHERE id = ?', [id], callback);
    }

    static createTask(task, callback) {
        const { title, description, status } = task;
        db.run(
            'INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)', [title, description, status || 'pending'],
            function(err) {
                if (err) {
                    callback(err);
                } else {
                    callback(null, this.lastID);
                }
            }
        );
    }

    static updateTask(id, task, callback) {
        const { title, description, status } = task;
        db.run(
            'UPDATE tasks SET title = ?, description = ?, status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?', [title, description, status, id],
            callback
        );
    }

    static deleteTask(id, callback) {
        db.run('DELETE FROM tasks WHERE id = ?', [id], callback);
    }
}

module.exports = Task;