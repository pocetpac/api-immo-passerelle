import express from 'express';
const router = express.Router();
import RealtyTypeController from '../src/controllers/RealtiesTypesController.mjs';
let rtController = new RealtyTypeController();


router.get('/', rtController.getAll);

router.get('/:id', rtController.getById);

router.post('/', rtController.createType);

router.put('/:id', rtController.updateType);

router.delete('/:id', rtController.deleteType);


export default router;