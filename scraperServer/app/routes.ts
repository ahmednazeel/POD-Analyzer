import { Express } from "express";
import { ScraperRoutes } from "../api/routes/scraper.routes.js";

export const registerRoutes = (app:Express) => 
{
    app.use('/api', ScraperRoutes())
} 