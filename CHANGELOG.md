# Changelog

All notable changes to the **Salamat Doc P2P Chatroom** project are documented in this file.

---

## [1.2.0] - 2026-07-20

### Added
- Cryptographic keys display modal (`#keysModal`) displaying Public Key and Private Key upon successful registration.
- Custom toast notification alerts (`showToast`) for user validation feedback.
- System welcome message in general chat room after login.
- Client-side validation enforcing at least 8 characters for account passwords.
- Project documentation files (`README.md`, `INSTALL.md`, `ARCHITECTURE.md`, `CHANGELOG.md`, `.gitignore`).

### Fixed
- Fixed switchRoom guard bug where logging in would abort default `#general` room subscription if currentRoomName matched initial general string.
- Corrected Gun.js serialization issues by replacing `Infinity` with `0` in default room last activity timestamps.

---

## [1.1.0] - 2026-07-20

### Added
- Node.js backend relay server (`server.js`) with Express static file serving and Gun peer node configuration.
- Local disk persistence using Gun Radisk database engine.

### Removed
- Removed CAPTCHA modals, assets, mathematical puzzles, and verification triggers.
- Deleted unused helper files (`million.js`).

---

## [1.0.0] - 2026-07-20

### Added
- Initial project structure with Salamat Doc branded frontend interface.
