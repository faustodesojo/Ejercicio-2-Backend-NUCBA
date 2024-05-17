import mongoose from "mongoose";

export const conectarDB = async (): Promise<void> => {
    try {
        await mongoose.connect("mongodb+srv://faustodesojo:nucba3317@entrega2.ko5kopv.mongodb.net/");
        console.log("Conectado a la base de datos");
    } catch (error) {
        console.log(error);
        throw new Error("Error al conectar a la base de datos");
    }
}