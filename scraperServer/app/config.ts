const convertToNumber = (value:string | undefined, fallback:number):number => {
    if(!value) return fallback;
    const parsed = Number.parseInt(value, 10); 
    return Number.isNaN(parsed) ? fallback : parsed;
}

export const config = Object.freeze({
    port: convertToNumber(process.env.PORT , 3000),
    environment: process.env.ENVIRONMENT,
})