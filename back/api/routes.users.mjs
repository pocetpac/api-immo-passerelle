import express from 'express';
const router = express.Router();
import UserController from '../src/controllers/UserController.mjs';

import { body, validationResult } from 'express-validator';

router.get('/', (req, res) => {
    (new UserController).getAll(req, res);
});

router.get('/:id', (req, res) => {
    (new UserController).getById(req, res);
});

router.post('/', 
    body('firstname').isLength({ min: 4 }),
    body('lastname').isLength({ min: 4 }),
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        (new UserController).createUser(req, res);
});

router.put('/:id', (req, res) => {
    (new UserController).updateUser(req, res);
});

router.delete('/:id', (req, res) => {
    (new UserController).deleteUser(req, res);
});

export default router;