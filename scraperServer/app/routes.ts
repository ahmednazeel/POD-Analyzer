import { Express } from "express";
import { ScraperRoutes } from "../api/routes/mock.routes.js";
import { ScraperEngine } from "../scraper/core/scraperEngine.js";

export const registerRoutes = (server:Express,engine:ScraperEngine) => 
{
    server.use('/api/scrape/mock', ScraperRoutes(engine))
} 