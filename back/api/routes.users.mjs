import express from 'express';
const router = express.Router();
import UserController from '../src/controllers/UserController.mjs';


router.get('/', (req, res) => {
    (new UserController).getAll(req, res);
});

router.get('/:id', (req, res) => {
    (new UserController).getById(req, res);
});

router.post('/', (req, res) => {
    (new UserController).createUser(req, res);
});

router.put('/:id', (req, res) => {
    (new UserController).updateUser(req, res);
});

router.delete('/:id', (req, res) => {
    (new UserController).deleteUser(req, res);
});

export default router;