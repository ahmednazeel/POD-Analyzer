import { Router } from "express"
import { createScrapeController } from "../controllers/scraper.controllers.js";

export const ScraperRoutes = () => {
    const router = Router();
    
    router.get("/scrape", createScrapeController())
    
    return router;
}