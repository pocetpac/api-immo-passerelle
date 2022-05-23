import express from 'express';
const router = express.Router();
import RealtyTypeController from '../src/controllers/RealtiesTypesController.mjs';
let rtController = new RealtyTypeController();


/**
 * @api {get} /realties/type/ Get all types of realties
 * @apiName GetAllRealtyTypes
 * @apiGroupe RealtyTypes
 * 
 * @apiSuccess {Object[]} types list of Types
 * @apiSuccess {Number} types.id Type's ID
 * @apiSuccess {string} types.title Title of the type
 */
router.get('/', rtController.getAll);

/**
 * @api {get} /realties/type/:id Get a type by id 
 * @apiName GetRealtyTypesById
 * @apiGroupe RealtyTypes
 * 
 * @apiParams {Number} id Type's unique ID
 * 
 * @apiSuccess {Number} id Type's ID
 * @apiSuccess {json} title Title of the type of realty
 * 
*/
router.get('/:id', rtController.getById);

router.post('/', rtController.createType);

router.put('/:id', rtController.updateType);

router.delete('/:id', rtController.deleteType);


export default router;