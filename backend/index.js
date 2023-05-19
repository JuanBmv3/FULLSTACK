import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import veterinarioRoutes from "./routes/veterinarioRoutes.js"
import pacientesRouter from "./routes/pacientesRoutes.js"

const app = express();

dotenv.config(); // para las variables de entorno


app.use(express.json()) // Para recibir datos json

conectarDB(); 

app.use('/api/veterinarios', veterinarioRoutes) // Ruta para veterinarios
app.use('/api/pacientes', pacientesRouter)  // Ruta para pacientes

const PORT = process.env.PORT || 4000;

app.listen(PORT);