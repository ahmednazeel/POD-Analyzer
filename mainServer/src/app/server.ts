import express from "express"
import { settings } from "../configs/settings.js"
import { routesRegistry } from "./routesRegistry.js";
function runServer() {
    const server = express();
    server.use(express.json());

    routesRegistry(server)
    server.listen(settings.port, ()=> {
        console.log("Server Is Running On ", settings.port)
    })

}

runServer()