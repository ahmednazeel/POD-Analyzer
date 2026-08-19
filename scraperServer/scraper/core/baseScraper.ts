import { ScraperContext } from "../../types/scraperContext.js";
import { ScraperOptions } from "../../types/scraperOptions.js";
import { ScraperResult } from "../../types/scraperResults.js";

export interface Scraper {
    readonly source:string;
    search(
        query:string,
        options:ScraperOptions,
        context:ScraperContext
    ) : Promise<ScraperResult>;
}