import { Router } from 'express';
import medicosController from "../controller/medicosController";

const router = Router();

router.get('/medicos', medicosController.listarMedicos);

router.post('/medicos', medicosController.adicionarMedicos);

router.put('/medicos/:id', medicosController.atualizarMedicos);

router.delete('/medicos/:id', medicosController.deletarMedicos);

export default router;