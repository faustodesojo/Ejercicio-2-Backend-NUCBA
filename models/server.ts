import express, { Express } from "express";
import { conectarDB } from "../database/config";
import userRoutes from "../routes/users";
import expensesRoutes from "../routes/expenses";

export class Server {
    app: Express;
    constructor() {
        this.app = express();
        this.conexionarDB();
        this.middlewares();
        this.routes();
    }
    async conexionarDB(): Promise<void> {
        await conectarDB();
    }
    middlewares(): void {
        this.app.use(express.json());
    }
    routes(): void {
        this.app.use("/users", userRoutes);
        this.app.use("/expenses",expensesRoutes);
    }
    listen(): void {
        this.app.listen(8080, () => {
            console.log("Servidor corriendo en el puerto 8080");
        })
    }
}