import { randomUUID } from "node:crypto";
import { ScraperOptions } from "../../types/scraperOptions.js";
import { ScraperRegistry } from "./ScraperRegistry.js";
import { logger } from "../../utils/logger.js";

export class ScraperEngine {
    
    constructor (private readonly registry:ScraperRegistry) {} 

    async run(source:string, query:string, options:ScraperOptions){
        const requestId = randomUUID();
        const startAt = Date.now();

        logger.info("SCRAPER_STARTED", {requestId, startAt, source, query});
        
        const scraper = this.registry.get(source);
        
        logger.info("SOURCE_SELECTED");
        
        const result = await scraper.search(query,options, {requestId});
        const duration = Date.now() - startAt;
        
        logger.info("SCRAPE_COMPLETE")
        return {...result, source, query, duration}
    }

}