# Salamat Doc P2P Chatroom

A secure, decentralized, serverless-first, and peer-to-peer (P2P) medical chatroom application branded as **Salamat Doc**. Built using Gun.js for local graphs and client-side end-to-end cryptography, Express for static hosting, and Radisk for server-side disk storage persistence.

---

## 🌟 Features

- **Decentralized Messaging**: Peer-to-peer direct node connection via Gun.js.
- **Branded Design**: Implements custom Salamat Doc colors, medical-themed CSS typography, and optimized responsive layouts.
- **Cryptographic Security**: Auto-generates SEA (Security, Encryption, Authorization) public/private keypairs upon account creation.
- **Private Key Modal**: Displays cryptographic credentials upon successful signup for secure credential backups.
- **Dynamic Welcome & Status Feed**: High-fidelity custom toast notifications and system messages in chat feeds.
- **Local Database Persistence**: Enabled disk persistence utilizing Gun Radisk to ensure messages survive server reboots.
- **Multiple Rooms**: Supports creating new custom rooms and navigating between them dynamically.
- **Moderator Control**: Integrated moderator and super-admin actions to control spam and manage inactive rooms.

---

## 📁 Directory Structure

```text
memepi-p2p/
├── images/
│   └── salamat_doc_logo.png   # Salamat Doc branding assets
├── radata/                    # Local Gun.js Radisk storage (gitignored)
├── index.html                 # Main frontend application markup and styling
├── server.js                  # Node.js backend relay server
├── package.json               # Project manifest and dependencies
├── .gitignore                 # Excluded dependencies and local data
├── README.md                  # Project overview (this file)
├── INSTALL.md                 # System requirements and installation instructions
├── ARCHITECTURE.md            # Cryptographic details and protocol description
└── CHANGELOG.md               # Version history and development log
```

---

## 🛠️ Technology Stack

- **Core**: HTML5, Vanilla JavaScript, CSS3 variables
- **P2P DB & Graph**: Gun.js, SEA.js
- **Backend Server**: Node.js, Express.js
- **Persistence Layer**: Radisk (IndexedDB client-side, local filesystem server-side)