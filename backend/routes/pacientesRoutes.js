import { actualizarPaciente, agregarPaciente, eliminarPaciente, obtenerPaciente, obtenerPacientes } from "../controllers/pacienteController.js";
import express from "express";
import checkAuth from "../middleware/authMiddleware.js";

const router = express.Router();

router.get('/', checkAuth, obtenerPacientes)
router.post('/', checkAuth , agregarPaciente)

router.get('/:id', checkAuth, obtenerPaciente)
router.put('/:id', checkAuth, actualizarPaciente)
router.delete('/:id', checkAuth, eliminarPaciente)

export default router;