/**
  # Why This Function: it is helper for us in the controllers, instead of writing it in every
    controller we give it (instances| references) of the controller parameters as like (res, error)
*/

import type { ExpressResponse } from "../types/express.js";
import { controllerResponse } from "./controllerResponse.js";

export const catchError = (res:ExpressResponse, error: unknown, controllerName:string) => {
    if (error instanceof Error) {
        console.log(`Error Happened In ${controllerName} Function:`, error.message);
        controllerResponse(res, error.message, 500, false);
    } else {
        console.log("Unexpected error:", error);
        controllerResponse(res, "Unknown error occurred", 500, false);
    }
}