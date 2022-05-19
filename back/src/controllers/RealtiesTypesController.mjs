import RealtyTypeRepository from "../repository/RealtiesTypesRepository.mjs";
import serviceApiResponse from "../service/dataApiResponse.js";

class RealtyTypeController {

    getAll(req, res) {
        const Type = new RealtyTypeRepository();
        Type.getAll().then(types => {
            res.status(200).json(types);
        })
    }

    getById(req, res) {
        const Type = new RealtyTypeRepository();
        Type.getById(req.params.id).then(type => {
            res.status(302).json(type);
        })
    }

    createType(req, res) {
        const Type = new RealtyTypeRepository();
        let data = {
            title: req.body.title
        }
        Type.createRealtyType(data).then(type => {
            res.status(201).json(serviceApiResponse(type));
        })
    }

    updateType(req, res) {
        let data = {};
        if(req.body.title) data.title = req.body.title;
        const Type = new RealtyTypeRepository();
        Type.updateRealtyType(req.params.id, data).then(result => {
            res.status(200).json(serviceApiResponse(result));
        })
    }

    deleteType(req, res) {
        const Type = new RealtyTypeRepository();
        Type.deleteRealtyType(req.params.id).then(result => {
            res.status(202).json(serviceApiResponse(result));
        })
    }
}

export default RealtyTypeController;