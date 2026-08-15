# What We Made in This Commit

In this commit, we initialized the scraper server as a **TypeScript-based Node.js backend** and established the initial project structure.

The main goals of this commit were:

* Initialize the Node.js project.
* Add TypeScript support.
* Configure TypeScript compilation.
* Add `tsx` for running TypeScript during development.
* Create the initial server entry point.
* Establish the application (`app`) structure.
* Create a centralized configuration module.
* Create a reusable utilities (`utils`) folder.
* Implement a minimal structured logger.

This gives us a clean foundation before we start implementing the actual scraping engine.

---

# Project Structure

```text
scraperServer/
│
├── app/
│   ├── server.ts
│   └── config.ts
│
├── utils/
│   └── logger.ts
│
├── .env
├── package.json
└── tsconfig.json
```

---

# Files and Responsibilities

### `app/server.ts`

The **application entry point**.

Its responsibility is to:

* Load the environment configuration.
* Create the Express application.
* Register global middleware.
* Start the HTTP server.
* Connect the application with the configuration and logging layers.

The server should remain focused on application bootstrapping rather than containing business or scraping logic.

---

### `app/config.ts`

The **central configuration module**.

Its responsibility is to read values from `process.env`, validate/convert them when necessary, and expose them to the rest of the application through a single configuration object.

Instead of accessing environment variables throughout the application:

```ts
process.env.PORT
process.env.SOMETHING
process.env.OTHER
```

other modules can use:

```ts
config.port
```

This keeps environment-specific configuration centralized.

---

### `utils/`

Contains reusable helper functionality that can be shared by different parts of the application.

The goal is to prevent common functionality from being duplicated across the project.

Examples that may be added later include:

* Logger
* Error utilities
* Validation helpers
* Formatting utilities

Only genuinely reusable functionality should be placed here.

---

### `utils/logger.ts`

Provides a small **structured logging abstraction**.

Instead of scattering direct `console.log()` calls throughout the application, other modules can use:

```ts
logger.info("Server started", {
    port: config.port
});
```

The logger converts the event into a structured JSON object containing information such as:

* timestamp
* log type
* message
* additional contextual fields

For example:

```json
{
  "timestamp": "...",
  "message": "Server started",
  "type": "info",
  "port": 3000
}
```

This makes logs more consistent and easier to inspect, search, and process later.

The logger is intentionally minimal in this phase. A more advanced logging library can be introduced later without changing every logging call throughout the application.

---

# Development Setup

The project uses:

* **Node.js** — runtime
* **TypeScript** — static typing
* **tsx** — running TypeScript during development
* **Express** — HTTP server framework
* **dotenv** — environment configuration

Development is started with:

```bash
npm run dev
```

---

# Current Architecture

At this stage, the application flow is intentionally simple:

```text
.env
  ↓
config.ts
  ↓
server.ts
  ↓
Express Server
  ↓
logger.ts
```

This commit establishes the foundation for the next stage: building the **scraper engine**.

---

# Why We Start This Way

The project is intended to grow into a multi-source scraping system.

Eventually, the architecture will look more like:

```text
API
 │
 ▼
Scraper Engine
 │
 ├── Etsy Scraper
 ├── Redbubble Scraper
 ├── Amazon Scraper
 └── Other Sources
```

The initialization in this commit gives us clear boundaries between:

* application startup
* configuration
* utilities
* future business logic

This allows the scraping functionality to be added without turning `server.ts` into a large file containing unrelated responsibilities.
