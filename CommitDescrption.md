# What Did I Do in This Commit?

## Change in Direction

I discovered that Etsy provides an **Open API V3**, which allows us to retrieve product listing information through an official API.

Because of this, I decided to change the initial implementation strategy. Instead of building the Etsy scraper first, I will focus on implementing the **main MVP** using the official Etsy API.

This allows us to focus on the core product and get the MVP ready faster without spending time building and maintaining a scraper for data that is already available through an official API.

The scraper is **not being removed from the overall plan**. It will become part of a later stage when we expand the market analysis to additional platforms such as **Redbubble, Shopify, and other marketplaces**.

### Current Direction

```text
MVP
 │
 └── Etsy Open API V3
        │
        └── Build & validate the core product
                    │
                    ▼
              First MVP Release
                    │
                    ▼
          Expand Market Analysis
                    │
          ┌─────────┼─────────┐
          ▼         ▼         ▼
       Etsy    Redbubble   Shopify
                    │
                    ▼
             Additional Data
                Sources
```

---

## New Project Structure

```text
mainServer/
└── src/
    ├── app/
    │   ├── server.ts
    │   └── routesRegistry.ts
    │
    └── configs/
        └── settings.ts
```

## File Responsibilities

### `server.ts`

Responsible for **server initialization** and starting the application.

### `routesRegistry.ts`

Responsible for **registering and organizing all application routes** in one central place.

### `settings.ts`

Responsible for **loading configuration values from environment variables** (`.env`) and exposing them through a centralized configuration object.

---

## Why This Structure?

The goal is to keep the server organized by responsibility:

* **`server.ts`** → Server initialization
* **`routesRegistry.ts`** → Route registration
* **`settings.ts`** → Application configuration

This separation provides a clean foundation for the MVP and makes the backend easier to maintain and extend as new features and data sources are added.
