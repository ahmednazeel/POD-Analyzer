import { ExpressRequest, ExpressResponse } from "../../types/expressType.js" // Instead of Call Request|Response from express and pass if to each controller


export const createScrapeController = () => {
    return async ( req:ExpressRequest, res:ExpressResponse ) => 
    {
        // Start of the Controller
        const {source, query, options} = req.body;
        console.log("Controller Running and Data is", {source, query, options})
        
    }
}