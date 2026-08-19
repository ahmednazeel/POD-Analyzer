import { ScraperEngine } from "../../scraper/core/scraperEngine.js";
import { ExpressRequest, ExpressResponse } from "../../types/expressType.js" // Instead of Call Request|Response from express and pass if to each controller
import { Return } from "../../utils/endpointUnifiedResponse.js";


export const createScrapeController = (engine:ScraperEngine) => {

    return async ( req:ExpressRequest, res:ExpressResponse ) => 
    {
        // Start of the Controller
        const {query} = req.query;
        const scraping =await engine.run('mock',query as string, {});
        console.log(scraping)
        Return(res, true, 200,'work Done!', {...scraping})
        
    }

}