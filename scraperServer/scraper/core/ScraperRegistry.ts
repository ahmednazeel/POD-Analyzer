import { Scraper } from "./baseScraper.js";

export class ScraperRegistry 
{
    
    private readonly scrapers = new Map<string,Scraper>();

    register(scraper:Scraper): void {
        if(this.scrapers.has(scraper.source))
            throw new Error(`A scraper is already registered for source "${scraper.source}".`);
        this.scrapers.set(scraper.source, scraper)
    }

    get(source:string) :Scraper {
        const scraper = this.scrapers.get(source);
        if(!scraper) throw new Error('fksljd;')
        return scraper        
    }

    has(source: string) :boolean { return this.scrapers.has(source) }

    sources() :string[] { return [...this.scrapers.keys()] }

}