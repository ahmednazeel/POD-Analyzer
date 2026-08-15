// Libraries ----------------------
import dotenv from 'dotenv'
dotenv.config();
import express from 'express'
// Helpers --------------------
import { config } from './config.js';
import { logger } from '../utils/logger.js';



function bootstrap() {
    const server = express();

    server.use(express.json()); 
    
    server.listen(config.port, () => logger.info("Server Start", {port: config.port}) )
}

// Open The Server
bootstrap();