import express from 'express';
const router = express.Router();
import RealtyController from '../src/controllers/RealtiesController.mjs';
let rController = new RealtyController();


router.get('/', rController.getAll);

router.get('/:id', rController.getById);

router.post('/', rController.createRealty);

router.put('/:id', rController.updateRealty);

router.delete('/:id', rController.deleteRealty);


export default router;