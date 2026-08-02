# 🌉 JanSetu (जनसेतु) — Frictionless Civic Issue Reporting

> **JanSetu** (*"Bridge of the People"*) is a lightweight, zero-friction civic-tech web application built to connect citizens with municipal governance. Designed with a **no-login approach**, JanSetu enables citizens to report community issues (potholes, water leaks, waste accumulation, power outages, broken streetlights) instantly with a single tap, voice/text, or photo.

---

## 🎯 What JanSetu is Made For

Traditional civic portals require user registration, OTP authentication, and multi-step forms, creating high friction for citizens who want to report urgent municipal issues. 

**JanSetu removes authentication barriers** so citizens can submit complaints in seconds without creating an account. Meanwhile, municipal field officers and administrators have dedicated, real-time dashboards to view, track, and update complaint statuses.

---

## ✨ Core Features (Actually Implemented)

### 👤 Citizen Portal (`index.html`)
- ⚡ **One-Tap Reporting:** Instantly report common civic issues:
  - 🛣️ **Potholes & Roads**
  - 💧 **Water Supply**
  - 🗑️ **Waste Management**
  - ⚡ **Electricity**
  - 💡 **Street Lighting**
- 📍 **Automatic Location Detection:** Detects latitude and longitude using the browser's Geolocation API.
- 🎙️ **Voice & Text Modal:** Submit complaints via Web Speech API or manual text input, with image preview and client-side integrity validation.
- 💬 **Interactive AI Chatbot (`chatbot.js`):** Floating assistant to guide users through issue reporting and status tracking.
- 🌐 **4-Language Support (`i18n.js`):** Dynamic client-side language switching between **English**, **Hindi (हिंदी)**, **Telugu (తెలుగు)**, and **Urdu (اردو)**.
- 🌙 **Dark & Light Theme (`jansetu-core.js`):** Persistent theme switcher stored in `localStorage`.

### 🛡️ Field Officer Portal (`officer.html`)
- 📋 **Task Management:** View assigned civic complaints filtered by status and priority.
- 🔄 **Status Updating:** Move tickets through the resolution lifecycle (`Assigned` ➔ `In Progress` ➔ `Resolved` / `Escalated`).

### 🏛️ Admin Command Center (`admin.html`)
- 📊 **City Metrics Dashboard:** Real-time visual overview of total complaints, active tasks, critical escalations, and category distributions.

---

## 🛠️ Actual Tech Stack Used

- **Frontend:** Semantic HTML5, Custom Vanilla CSS3 (Glassmorphism, CSS Variables, Flexbox/Grid), JavaScript (ES6+)
- **Browser APIs:** Geolocation API, Web Speech API (`SpeechRecognition`), LocalStorage
- **Backend:** Node.js, Express.js (v5.0), CORS
- **Database:** SQLite3 (`backend/jansetu.db`) with native Node `crypto` for UUID generation

---

## 📁 Repository Structure

```
JanSetu/
├── index.html            # Main Citizen Portal (One-Tap & Voice/Text Reporting)
├── officer.html          # Field Officer Dashboard for updating ticket status
├── admin.html            # Admin Command Overview Dashboard
│
├── styles.css            # Main Design System & CSS custom variables
├── portal.css            # Shared layout styles across portals
├── admin.css             # Admin dashboard specific layout styles
├── officer.css           # Officer dashboard specific layout styles
│
├── script.js             # One-tap reporting, geolocation, modal & image validation logic
├── jansetu-core.js       # Dark/Light theme manager
├── chatbot.js            # Interactive floating chatbot assistant
├── i18n.js               # Client-side translation engine (EN, HI, TE, UR)
│
├── backend/              # Node.js Express & SQLite Backend
│   ├── server.js         # Express server & static asset host
│   ├── database.js       # SQLite connection & complaints schema setup
│   ├── package.json      # Node dependencies manifest
│   ├── controllers/      # Route request handler (complaintController.js)
│   ├── models/           # SQLite Data Access Model (Complaint.js)
│   ├── routes/           # REST API Routes (complaintRoutes.js)
│   └── jansetu.db        # SQLite database storage file
│
└── README.md             # Project documentation
```

---

## 💾 Database Schema

SQLite3 database stores all complaints in the `complaints` table:

```sql
CREATE TABLE IF NOT EXISTS complaints (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    category TEXT NOT NULL,
    location TEXT NOT NULL,
    status TEXT DEFAULT 'assigned',
    urgency TEXT DEFAULT 'Medium',
    createdAt TEXT,
    updatedAt TEXT
);
```

---

## ⚙️ Quick Start Guide

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** (v8 or higher)

### Setup & Run

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the Express server:**
   ```bash
   npm start
   ```

4. **Access the application in your browser:**
   - **Citizen Portal:** [http://localhost:5000/](http://localhost:5000/)
   - **Officer Dashboard:** [http://localhost:5000/officer.html](http://localhost:5000/officer.html)
   - **Admin Dashboard:** [http://localhost:5000/admin.html](http://localhost:5000/admin.html)
   - **Backend API Test:** [http://localhost:5000/api/test](http://localhost:5000/api/test)

---

## 📡 Active REST API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/test` | Backend health check endpoint |
| `GET` | `/api/complaints` | Fetch all submitted complaints (sorted by latest) |
| `GET` | `/api/complaints/:id` | Fetch a single complaint by UUID |
| `POST` | `/api/complaints` | Create a new complaint (`title`, `description`, `category`, `location`, `status`, `urgency`) |
| `PUT` | `/api/complaints/:id` | Update complaint status (`status`: `assigned`, `in_progress`, `resolved`) |

---

## 📜 License

This project is licensed under the **ISC License**.
