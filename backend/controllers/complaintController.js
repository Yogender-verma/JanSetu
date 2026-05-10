const Complaint = require('../models/Complaint');
const crypto = require('crypto');

exports.createComplaint = (req, res) => {
    const { title, description, category, location, status, urgency } = req.body;
    
    if (!title || !description || !category || !location) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const id = crypto.randomUUID();
    const now = new Date().toISOString();
    
    const newComplaint = {
        id,
        title,
        description,
        category,
        location,
        status: status || 'assigned',
        urgency: urgency || 'Medium',
        createdAt: now,
        updatedAt: now
    };

    Complaint.create(newComplaint, (err, result) => {
        if (err) {
            console.error('Error creating complaint:', err);
            return res.status(500).json({ error: 'Database error while creating complaint' });
        }
        res.status(201).json(newComplaint);
    });
};

exports.getAllComplaints = (req, res) => {
    Complaint.findAll((err, rows) => {
        if (err) {
            console.error('Error fetching complaints:', err);
            return res.status(500).json({ error: 'Database error while fetching complaints' });
        }
        res.status(200).json(rows);
    });
};

exports.getComplaintById = (req, res) => {
    const { id } = req.params;
    Complaint.findById(id, (err, row) => {
        if (err) {
            console.error('Error fetching complaint:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        if (!row) {
            return res.status(404).json({ error: 'Complaint not found' });
        }
        res.status(200).json(row);
    });
};

exports.updateComplaintStatus = (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
        return res.status(400).json({ error: 'Status is required' });
    }

    const now = new Date().toISOString();

    Complaint.updateStatus(id, status, now, (err, result) => {
        if (err) {
            console.error('Error updating complaint:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        
        Complaint.findById(id, (err, row) => {
            if (err) return res.status(500).json({ error: 'Database error' });
            if (!row) return res.status(404).json({ error: 'Complaint not found' });
            res.status(200).json(row);
        });
    });
};
