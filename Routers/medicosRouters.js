import { Router } from 'express';
import medicosController from "../controller/medicosController.js";
import validaMedicos from '../middleware/validacao.js';

const router = Router();

router.get('/medicos', medicosController.listarMedicos);

router.post('/medicos', validaMedicos, medicosController.adicionarMedicos);

router.put('/medicos/:id',validaMedicos, medicosController.atualizarMedicos);

router.delete('/medicos/:id', medicosController.deletarMedicos);

export default router;