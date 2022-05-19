import RealtyRepository from "../repository/RealtiesRepository.mjs";
import serviceApiResponse from "../service/dataApiResponse.js";

class RealtyController {
    
    getAll(req, res) {
        const Realty = new RealtyRepository();
        Realty.getAll().then(realty => {
            res.status(200).json(realty);
        })
    }
    
    getById(req, res) {
        const id = req.params.id;
        if(id != "type") {
            const Realty = new RealtyRepository();
            Realty.getById(req.params.id).then(realty => {
                res.status(302).json(realty);
            })
        }
        
    }
    
    createRealty(req, res) {
        const Realty = new RealtyRepository();
        let entity = {
            type: req.body.type,
            adress_1: req.body.adress_1,
            city: req.body.city,
            zipcode: req.body.zipcode,
            surface: req.body.surface,
            nb_rooms: req.body.nb_rooms,
            price: req.body.price,
            description: req.body.description,
        }
        Realty.createRealty(entity).then(realty => {
            res.status(201).json(serviceApiResponse(realty));
        })
    }
    
    updateRealty(req, res) {
        const id = req.params.id;
        if(id != "type") {  
            let entity = {};
            let fields = ['type', 'adress_1', 'city', 'zipcode', 'surface', 'nb_rooms', 'price', 'description'];
            fields.forEach(field => { if(req.body[field]) entity[field] = req.body[field]; })
            const Realty = new RealtyRepository();
            Realty.updateRealty(id, entity).then(result => {
                res.status(200).json(serviceApiResponse(result));
            })
        }
    }
    
    deleteRealty(req, res) {
        const id = req.params.id;
        if(id != "type") { 
            const Realty = new RealtyRepository();
            Realty.deleteRealty(id).then(result => {
                res.status(202).json(serviceApiResponse(result));
            });
        }
    }
}

export default RealtyController;