# What We Made in This Commit
## IN => /scraperServer 
In this commit, we started building the route infrastructure and folder structure by creating a mock route with GET /api/scrape. The purpose of this mock route is to validate that the infrastructure is correctly set up and ready to work with clean, reliable code.

We also added a types folder to centralize the Express types. Instead of extracting Request and Response from Express separately in every controller, we created shared types that can be reused across the application.

We also added a routes.ts file responsible for registering and composing the application routes. This keeps the server entry point clean and prevents route definitions from being directly placed inside the server function, making the application easier to read and maintain.

In addition, we introduced a unified response utility in utils/endpointUnifiedResponse.ts. It receives parameters such as the response object, success status, and other response data, then builds a consistent response format that can be reused across all controllers.

Finally, we added the controller and routes folders inside the API structure. These follow the project's standard organization and keep responsibilities separated in a clear and understandable way.
---

# Project Structure

```text
scraperServer/
│
├── app/
├──   controllers/
│     ├── scraper.controller.ts
├──   routes/
│     ├── scraper.routes.ts
├── app/
│   ├── server.ts
│   └── config.ts
│   └── routes.ts
├── utils/
│   └── logger.ts
│   └── endpointUnifiedResponse.ts 
├── .env
├── package.json
└── tsconfig.json
```

---

# Files and Responsibilities

### `scraperServer/api/routes`
I built a sample route of the Scraper 
```ts
import { Router } from "express"
import { createScrapeController } from "../controllers/scraper.controllers.js";

export const ScraperRoutes = () => {
    const router = Router();
    
    router.get("/scrape", createScrapeController())
    
    return router;
}
```
---
### `scraperServer/api/controllers`
I built a sample controller of the Scraper 
```ts
import { ExpressRequest, ExpressResponse } from "../../types/expressType.js" // Instead of Call Request|Response from express and pass if to each controller


export const createScrapeController = () => {
    return async ( req:ExpressRequest, res:ExpressResponse ) => 
    {
        // Start of the Controller
        const {source, query, options} = req.body;
        console.log("Controller Running and Data is", {source, query, options})
        
    }
}
```
---

### `scraperServer/types/expressType.ts`

this file contain the Express Request|Response Types to pass them to each modular will need them, so the work be consistent, easy to handle, depending on the rule of **Don't Repeat Yourself**
```ts
import {Request, Response} from 'express'
export type ExpressRequest = Request;
export type ExpressResponse = Response; 
```
and use them for example in `scraperServer/utils/endpointUnifiedResponse.ts` : 
snippet :
```ts
export const Return = (
    // Parameters
    res:ExpressResponse,
```
or in the controller itself
```ts
( req:ExpressRequest, res:ExpressResponse ) 
```

---

### `scraperServer/utils/endpointUnifiedResponse.ts`

Provides a small **structured response abstraction**.

Instead of scattering direct `res.status().json({...})` calls throughout the application controllers, we can use the unified one in the single file with a unified shape of response:

```ts
export {Response} from "express";
export const Return = (
    // Parameters
    res:ExpressResponse, 
    isSuccess:boolean, 
    statusCode:number,
    message:string, 
    rest?:Object 
) => 
{
    
    return res.status(statusCode).json({
        message:message,
        success:isSuccess,
        data:{ ...rest }
    })

}
```

so the Return Function take parameters to shape the response in this way, they are:

* reference from Response Express Object 
* {rest of the data we want to send to the caller}
* message
* statusCode
* isSuccess

For example:

```json
{
  "success": true,
  "message": "Scrapping happened successfully",
  "data": {
    "keyWord":"Catty Home",
    "listingCount":25055,
    "source":"etsy"
  },
}
```

This makes response more consistent and easier to inspect, search, and process later.
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
Routes
  ↓
Scrape Routes
  ↓
Scrape Controllers
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
