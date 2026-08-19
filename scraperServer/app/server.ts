// Libraries ----------------------
import dotenv from 'dotenv'
dotenv.config();
import express from 'express'
// Helpers --------------------
import { config } from './config.js';
import { logger } from '../utils/logger.js';
import { registerRoutes } from './routes.js';
import { ScraperRegistry } from '../scraper/core/ScraperRegistry.js';
import { MockScraper } from '../scraper/sources/mock/mockScraper.js';
import { ScraperEngine } from '../scraper/core/scraperEngine.js';



function bootstrap() {
    const server = express();
    
    const registry = new ScraperRegistry();

    registry.register(new MockScraper());

    const engine = new ScraperEngine(registry);


    server.use(express.json()); 
    
    registerRoutes(server,engine)

    server.listen(config.port, () => logger.info("Server Start", {port: config.port}) )
}

// Open The Server
bootstrap();