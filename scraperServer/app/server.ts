// Libraries ----------------------
import dotenv from 'dotenv'
dotenv.config();
import express from 'express'
// Helpers --------------------
import { config } from './config.js';
import { logger } from '../utils/logger.js';
import { registerRoutes } from './routes.js';



function bootstrap() {
    const server = express();

    server.use(express.json()); 
    
    registerRoutes(server)

    server.listen(config.port, () => logger.info("Server Start", {port: config.port}) )
}

// Open The Server
bootstrap();