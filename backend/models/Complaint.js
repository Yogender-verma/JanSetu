const db = require('../database');

class Complaint {
    static create(complaint, callback) {
        const sql = `INSERT INTO complaints (id, title, description, category, location, status, urgency, createdAt, updatedAt)
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const { id, title, description, category, location, status, urgency, createdAt, updatedAt } = complaint;
        db.run(sql, [id, title, description, category, location, status, urgency, createdAt, updatedAt], function(err) {
            callback(err, this);
        });
    }

    static findAll(callback) {
        const sql = `SELECT * FROM complaints ORDER BY createdAt DESC`;
        db.all(sql, [], (err, rows) => {
            callback(err, rows);
        });
    }

    static findById(id, callback) {
        const sql = `SELECT * FROM complaints WHERE id = ?`;
        db.get(sql, [id], (err, row) => {
            callback(err, row);
        });
    }

    static updateStatus(id, status, updatedAt, callback) {
        const sql = `UPDATE complaints SET status = ?, updatedAt = ? WHERE id = ?`;
        db.run(sql, [status, updatedAt, id], function(err) {
            callback(err, this);
        });
    }
}

module.exports = Complaint;
