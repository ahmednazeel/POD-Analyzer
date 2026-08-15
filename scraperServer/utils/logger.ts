export type logType = 'debug' | 'info' | 'warn' | 'error';
export type ScraperEventName = 
    | 'SCRAPE_STARTED' | 'SOURCE_SELECTED' | 'REQUEST_STARTED'
    | 'REQUEST_FAILED' | 'RETRY_STARTED' | 'PAGE_PARSED'
    | 'PRODUCT_FOUND' | 'SCRAPE_COMPLETED' | 'SCRAPE_FAILED';

interface logOutputProps {
    source?: string;
    query?: string;
    durationMs?: number;
    resultCount?: number;
    errorCode?: string;
    [key:string]: unknown;
}


class Logger {
    private mainType: logType;

    constructor(mainType: logType ='info') { this.mainType = mainType }

    private write(type:logType ,message:string, obj?:logOutputProps) : void {
        const initial = {
            timestamp:new Date().toISOString(),
            message:message,
            type,
            ...obj
        }
        const readyToOutput = JSON.stringify(initial);

        if(type === 'error') console.error(readyToOutput)
        else if(type === 'warn') console.warn(readyToOutput)
        else console.log(readyToOutput)
    }
    

    debug(message:string, fields?:logOutputProps) { this.write('debug', message, fields) };
    error(message:string, fields?:logOutputProps) { this.write('error', message, fields) };
    info(message:string, fields?:logOutputProps) { this.write('info', message, fields) };
    warn(message:string, fields?:logOutputProps) { this.write('warn', message, fields) };
    
}

export const logger = new Logger('info')