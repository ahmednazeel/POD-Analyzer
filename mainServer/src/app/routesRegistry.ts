import type { Application } from "express"
import authRouter from '../endpoints/routes/auth.routes.js'

export const routesRegistry = (server:Application) => {

    server.use("api/auth",authRouter)
}