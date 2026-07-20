# Installation & Setup Guide

This guide describes how to set up, configure, and launch the Salamat Doc P2P Chat application locally or in a server environment.

---

## 📋 Prerequisites

To run this project, make sure you have the following installed on your machine:
- **Node.js** (v16.x or higher recommended)
- **npm** (comes packaged with Node.js)

---

## ⚙️ Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/314-hash/gun.js1.git
   cd gun.js1
   ```

2. **Install Dependencies**:
   Install the required Node.js libraries (Express, Gun):
   ```bash
   npm install
   ```

---

## 🚀 Running the Application

### 1. Local Development Mode
Start the local peer relay server (runs on port `8000` by default):
```bash
npm start
```

Once the server is running, open your web browser and navigate to:
```text
http://localhost:8000/index.html
```

### 2. Multi-Peer Testing
To test the peer-to-peer real-time sync, open the application in multiple browser instances:
- Go to `http://localhost:8000/index.html` on Tab 1.
- Open a Private / Incognito window and navigate to the same URL.
- Create two separate user accounts with valid passwords (minimum 8 characters).
- Type a message in one tab, and watch it replicate in real-time on the other!
