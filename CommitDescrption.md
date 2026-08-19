# What We Made in This Commit

## In => `/scraperServer`

In this commit, we moved the project from a basic API/route foundation into the first version of the actual **scraper architecture**.

The main goal of this commit was to create a clean and extensible system where the API does not need to know how a specific scraper works. Instead, the API communicates with a central **Scraper Engine**, which selects and executes the appropriate scraper through a **Scraper Registry**.

This gives us a foundation that can later support multiple scraping sources such as Etsy, Redbubble, Amazon, and other marketplaces without putting source-specific logic inside the controllers.

---

# What Was Added

## 1. Scraper Contract

We introduced `BaseScraper.ts` as the common contract that every scraper must follow.

```ts
export interface Scraper {
    readonly source: string;

    search(
        query: string,
        options: ScraperOptions,
        context: ScraperContext
    ): Promise<ScraperResult>;
}
```

The interface defines the basic behavior expected from every scraper:

* Every scraper has a unique `source`.
* Every scraper implements a `search()` method.
* The search receives a `query`.
* Optional configuration is passed through `ScraperOptions`.
* Execution information is passed through `ScraperContext`.
* Every scraper returns a standardized `ScraperResult`.

This means that the `ScraperEngine` can work with any scraper without knowing its internal implementation.

---

# 2. Scraper Options, Context, and Results

We created shared types for communication between the scraper components.

### `types/scraperOptions.ts`

```ts
export interface ScraperOptions {
    limit?: number;
}
```

This will allow us to control scraper behavior without changing the scraper interface.

---

### `types/scraperContext.ts`

```ts
export interface ScraperContext {
    requestId: string;
}
```

Every scraping operation receives a unique `requestId`.

This will become useful later for tracing a complete scraping request through logs, retries, requests, and errors.

---

### `types/scraperResults.ts`

```ts
export interface ScraperResult {
    products: [];

    totalFound?: number;
}
```

The purpose of this type is to give every scraper a common result structure.

For example, a future scraper could return information such as:

```json
{
    "products": [],
    "totalFound": 3000
}
```

The result can then be handled by the engine and controller without knowing which source produced it.

---

# 3. Scraper Registry

We introduced `ScraperRegistry.ts`.

The registry is responsible for storing and retrieving available scrapers.

```ts
private readonly scrapers = new Map<string, Scraper>();
```

A scraper can be registered using:

```ts
registry.register(new MockScraper());
```

The registry prevents two scrapers from being registered under the same source:

```ts
if (this.scrapers.has(scraper.source))
    throw new Error(
        `A scraper is already registered for source "${scraper.source}".`
    );
```

A scraper can later be retrieved using its source:

```ts
const scraper = registry.get(source);
```

This gives us a dynamic architecture where adding a new scraper does not require changing the engine itself.

For example:

```text
Registry
   │
   ├── mock
   ├── etsy
   ├── redbubble
   └── amazon
```

---

# 4. Scraper Engine

The most important addition in this commit is `ScraperEngine.ts`.

The engine is responsible for coordinating a scraping operation.

```ts
const result = await scraper.search(
    query,
    options,
    { requestId }
);
```

The engine performs the following steps:

```text
1. Generate request ID
        ↓
2. Start execution timer
        ↓
3. Log scraping start
        ↓
4. Get scraper from Registry
        ↓
5. Execute scraper.search()
        ↓
6. Calculate execution duration
        ↓
7. Log completion
        ↓
8. Return standardized result
```

The engine also adds execution metadata to the final result:

```ts
return {
    ...result,
    source,
    query,
    duration
};
```

This means the API can receive both the scraper's result and information about the execution itself.

---

# 5. Added Request IDs

Each execution now receives a unique request ID:

```ts
const requestId = randomUUID();
```

For example:

```text
SCRAPER_STARTED
requestId: 8d3...
```

This gives every scraping operation its own identity.

Later, when the scraper system becomes more complex, this will allow us to trace:

```text
Request
   ↓
Engine
   ↓
Scraper
   ↓
HTTP Request
   ↓
Retry
   ↓
Parser
   ↓
Result
```

using the same request ID.

---

# 6. Added Execution Timing

The engine now measures how long each scraping operation takes.

```ts
const startAt = Date.now();

...

const duration = Date.now() - startAt;
```

The duration is returned with the result:

```json
{
    "source": "mock",
    "query": "cat",
    "duration": 2,
    "products": [],
    "totalFound": 3000
}
```

This will become useful later for monitoring scraper performance and comparing different scraping sources.

---

# 7. Created the First Scraper Implementation

We created `MockScraper.ts` as the first implementation of the scraper contract.

```ts
export class MockScraper implements Scraper {
    readonly source: string = 'mock';

    async search(
        query: string,
        options: ScraperOptions,
        context: ScraperContext
    ): Promise<ScraperResult> {
        return {
            products: [],
            totalFound: 3000
        };
    }
}
```

The mock scraper does not perform real scraping yet.

Its purpose is to verify that the complete architecture works before implementing a real marketplace scraper.

---

# 8. Connected the Mock Scraper to the Application

Inside `server.ts`, we now create the registry and engine during application startup:

```ts
const registry = new ScraperRegistry();

registry.register(new MockScraper());

const engine = new ScraperEngine(registry);
```

The engine is then passed into the application routes:

```ts
registerRoutes(server, engine);
```

This creates the dependency flow:

```text
server.ts
   │
   ├── creates Registry
   │
   ├── registers MockScraper
   │
   ├── creates ScraperEngine
   │
   └── passes Engine to Routes
```

---

# 9. Connected the API Controller to the Engine

The controller now receives the `ScraperEngine` instead of containing scraping logic itself.

```ts
export const createScrapeController = (engine: ScraperEngine) => {
    return async (req: ExpressRequest, res: ExpressResponse) => {
        const { query } = req.query;

        const scraping = await engine.run(
            'mock',
            query as string,
            {}
        );

        Return(
            res,
            true,
            200,
            'work Done!',
            { ...scraping }
        );
    };
};
```

The controller's responsibility is now mainly to:

1. Receive the HTTP request.
2. Extract the input.
3. Pass it to the engine.
4. Return the engine's result.

The controller does **not** need to know how the scraper works.

This separation will become especially important once we have multiple real scraping sources.

---

# Current Architecture

The architecture is now:

```text
                    HTTP Request
                         │
                         ▼
                Scraper Routes
                         │
                         ▼
              Scraper Controller
                         │
                         ▼
                  Scraper Engine
                         │
                         ▼
                Scraper Registry
                         │
                         ▼
                  Mock Scraper
                         │
                         ▼
                  Scraper Result
                         │
                         ▼
              Unified HTTP Response
```

The responsibilities are separated as follows:

```text
API Layer
    │
    ├── Routes
    └── Controllers

Scraper Core
    │
    ├── Scraper Contract
    ├── Scraper Registry
    └── Scraper Engine

Scraper Sources
    │
    └── Mock Scraper

Shared Types
    │
    ├── Scraper Options
    ├── Scraper Context
    └── Scraper Result

Utilities
    │
    ├── Logger
    └── Unified Response
```

---

# Updated Project Structure

```text
scraperServer/
│
├── app/
│   ├── server.ts
│   ├── config.ts
│   └── routes.ts
│
├── api/
│   ├── controllers/
│   │   └── mock.controllers.ts
│   │
│   └── routes/
│       └── mock.routes.ts
│
├── scraper/
│   │
│   ├── core/
│   │   ├── BaseScraper.ts
│   │   ├── ScraperRegistry.ts
│   │   └── ScraperEngine.ts
│   │
│   └── sources/
│       └── mock/
│           └── MockScraper.ts
│
├── types/
│   ├── expressType.ts
│   ├── scraperContext.ts
│   ├── scraperOptions.ts
│   └── scraperResults.ts
│
├── utils/
│   ├── logger.ts
│   └── endpointUnifiedResponse.ts
│
├── .env
├── package.json
└── tsconfig.json
```

---

# Complete Execution Flow

A request to the mock scraper now follows this architecture:

```text
GET /api/scrape/mock/:query
          │
          ▼
    Express Router
          │
          ▼
   Scrape Controller
          │
          ▼
   ScraperEngine.run()
          │
          ├── Generate Request ID
          │
          ├── Start Timer
          │
          ├── Log SCRAPER_STARTED
          │
          ▼
   ScraperRegistry.get("mock")
          │
          ▼
      MockScraper
          │
          ▼
      search(...)
          │
          ▼
     ScraperResult
          │
          ▼
    Calculate Duration
          │
          ▼
    Return Result
          │
          ▼
 Unified HTTP Response
```

---

# Why We Built It This Way

The main purpose of this commit was to establish the **core abstraction of the scraping system before implementing real scraping logic**.

We do not want the future architecture to look like:

```text
Controller
   │
   ├── Etsy scraping logic
   ├── Redbubble scraping logic
   ├── Amazon scraping logic
   ├── HTTP requests
   ├── parsing
   ├── retries
   └── error handling
```

Instead, we want the application to grow like this:

```text
                    Scraper Engine
                          │
                    Scraper Registry
                          │
          ┌───────────────┼───────────────┐
          │               │               │
          ▼               ▼               ▼
      EtsyScraper   RedbubbleScraper   AmazonScraper
          │               │               │
          ▼               ▼               ▼
       Etsy API/       Redbubble        Amazon
       HTML/etc.        source           source
```

The engine should not care how Etsy works, how Redbubble works, or how another marketplace works.

It only needs to know that each scraper follows the same `Scraper` contract.

This gives us a system that is easier to extend, test, maintain, and eventually scale.

---

# Development Setup

The project continues to use:

* **Node.js** — runtime
* **TypeScript** — static typing
* **Express** — HTTP server framework
* **tsx** — TypeScript development runner
* **dotenv** — environment configuration

Development is started with:

```bash
npm run dev
```

---

# What Comes Next

The next stage is to replace the mock implementation with a real scraping source while keeping the same architecture.

The target is:

```text
API
 │
 ▼
Scraper Engine
 │
 ▼
Scraper Registry
 │
 ├── MockScraper
 │
 └── Real Source Scraper
       │
       ├── Request
       ├── Response
       ├── Parsing
       ├── Data Extraction
       └── Standardized Result
```

The goal is to keep the **core engine independent from individual scraping sources**, so new sources can be added without redesigning the application.
