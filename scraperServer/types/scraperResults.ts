export interface ScraperResult {
    products: [];
    /** Raw count as reported/observed by the source, if different from products.length (e.g. before limit truncation). */
    totalFound?: number;
}