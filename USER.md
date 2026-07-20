# User Manual: Salamat Doc P2P Chatroom

Welcome to **Salamat Doc**, a decentralized, peer-to-peer (P2P) medical chatroom designed for secure and private conversations. This manual explains how to set up your account, manage your security credentials, and use the messaging features.

---

## 🔒 Cryptographic Accounts & Security

Salamat Doc uses client-side cryptography. There is no centralized database holding passwords. Instead, your account is represented by a pair of cryptographic keys.

### 1. Registering an Account
1. Open the Salamat Doc interface.
2. Enter a unique **Username** and a **Password** (must be at least **8 characters long**).
3. Click **Sign Up**.
4. An overlay titled **🔒 Your Cryptographic Keys** will appear.

> [!WARNING]
> Your Private Key is the only way to recover your account or log in from a new browser. It is generated locally and never sent to a central server.
> **Store your Private Key in a secure password manager or offline vault!**

### 2. Copying your Backup Key
- Click the yellow **Copy Private Key** button in the keys modal.
- Save the clipboard contents safely.
- Click **Close & Proceed** to enter the chat lounge.

---

## 💬 Chatroom Interface & Navigation

```text
+-----------------------------------------------------------+
|                     Salamat Doc Chat                      |
+-----------------------------+-----------------------------+
| Rooms List                  | Messages Window             |
| #general (active)           | System: Welcome, user!      |
| #random                     | docuser1: Hello peer!       |
| #lounge                     |                             |
|                             |                             |
| [Create New Room]           | [Type message...]  [Send]   |
+-----------------------------+-----------------------------+
```

### 1. Sending Messages
- Once logged in, type your message in the chat input at the bottom right.
- Press **Enter** or click the **Send** button.
- Your message will instantly sync across all connected P2P nodes.

### 2. Switching & Creating Rooms
- Select any room from the **Rooms** panel on the left to navigate.
- Click the yellow **Create New Room** button, type in a room name (e.g. `medical-lounge`), and click confirm to establish a new public chatroom.
