import type { Application } from "express"
export const routesRegistry = (server:Application) => {
    server.get("/healthy", (req,res)=> {
        res.send("Sever is Running")
    })
}