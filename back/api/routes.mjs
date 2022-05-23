import express from 'express';
import apiUsersRoutes from './routes.users.mjs';
import apiRealtiesRoutes from './routes.realties.mjs';
import apiRealtiesTypesRoutes from './routes.realtiesTypes.mjs';
const router = express.Router();

 
// ... chargement de vos prochaines routes ici
router.use('/user', apiUsersRoutes);
router.use('/realties/type', apiRealtiesTypesRoutes);
router.use('/realties', apiRealtiesRoutes);
 
// Si une route n'existe pas, erreur 404
router.route("*").all((req,res) => { res.status(404).send(); });


export default router;
