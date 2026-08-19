import { Scraper } from "../../core/baseScraper.js";
import { ScraperOptions } from '../../../types/scraperOptions.js';
import { ScraperContext } from '../../../types/scraperContext.js';
import { ScraperResult } from "../../../types/scraperResults.js";

export class MockScraper implements Scraper 
{
    readonly source: string = 'mock';

    async search(query:string,options: ScraperOptions, context:ScraperContext ) : Promise<ScraperResult> {
            return {
                products:[],
                totalFound:3000
            }
    }
}