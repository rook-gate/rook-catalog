# Rook Catalog

Rook Catalog is a lightweight, local-first desktop application designed for discovering, installing, and managing Windows software packages through a curated user interface. It acts as a performance-driven graphical client powered natively by the Windows Package Manager (`winget`) CLI.

---

## Core Architecture

The application is built using a decoupled desktop architecture designed for minimal memory footprint and native execution speeds:

*   **Backend Runtime:** Go (Golang) handling low-latency system execution, direct process forks, and shell piping to the native system package manager.
*   **Frontend Interface:** React and Tailwind CSS providing a hardware-accelerated, single-page application interface bound to the Go runtime.
*   **IPC Bridge:** Bi-directional event binding for asynchronous command streaming (e.g., streaming deployment logs during package installation).
*   **State Architecture:** Local-first topology utilizing localized, atomic slice stores to track app states without relying on external cloud authentication layers.

---
