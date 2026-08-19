import { Router } from "express"
import { createScrapeController } from "../controllers/mock.controllers.js";
import { ScraperEngine } from "../../scraper/core/scraperEngine.js";

export const ScraperRoutes = (engine:ScraperEngine) => {
    const router = Router();
    
    router.get("/:query", createScrapeController(engine))
    
    return router;
}