import UserRepository from '../repository/UserRepository.mjs';
import serviceApiResponse from '../service/dataApiResponse.js';



class UserController {
    
    getAll(req, res) {
        const page = req.query.page || 1;
        const limit = req.query.limit || 10;
        const offset = page * limit - limit;
        const User = new UserRepository();
        User.countAll().then(count => {
            User.getAll(offset, limit).then(users => {
                res.status(200).json(serviceApiResponse(users, page, count, limit));
            })
        })
    }
    
    getById(req, res) {
        let userID = req.params.id;
        const User = new UserRepository();
        User.getById(userID).then(user => {
            res.status(302).json(user);
        })
    }
    
    createUser(req, res) {
        const User = new UserRepository();
        let entity = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
        }
        User.createUser(entity).then(user => {
            res.status(201).json(serviceApiResponse(user));
        })
    }
    
    updateUser(req, res) {
        let entity = {};
        let fields = ['firstname', 'lastname', 'email', 'password'];
        fields.forEach(field => { if (req.body[field])  entity[field] = req.body[field]; });
        const User = new UserRepository();
        User.update(req.params.id, entity).then(result => {
            res.status(200).json(serviceApiResponse(result));
        });        
    }
    
    deleteUser(req, res) {
        const User = new UserRepository();
        User.deleteUser(req.params.id).then(result => {
            res.status(202).json(serviceApiResponse(result));
        });
    }
}

export default UserController;
