import db from '../../database_SQL/config_db.mjs';

class RealtyRepository {
    
    async getAll(offset = 0, limit = 10) {
        const result = await db.promise().execute(
            "SELECT * FROM realties LIMIT ?, ?",
            [offset, limit]
        );
        return result[0];
    } 

    async countAll() {
        let result = await db.promise().execute(
            "SELECT COUNT(*) AS nb from realties"
        )
        return result[0][0].nb;
    }

    async getById(id) {
        const result = await db.promise().execute(
            "SELECT * FROM realties WHERE id=?",
            [id]
        );
        return result[0];
    }

    async createRealty(realty) {
        return await db.promise().execute(
            "INSERT INTO realties VALUES (null, ?, ?, ?, ?, ?, ?, ?, ?)",
            [realty.type, realty.adress_1, realty.city, realty.zipcode, realty.surface, realty.nb_rooms, realty.price, realty.description]
        );
    }

    async updateRealty(id, entity) {
        return db.promise().query(
            "UPDATE `realties` SET ? WHERE `id`=?", 
            [entity, id]
        );
    }

    async deleteRealty(id) {
        return await db.promise().execute(
            "DELETE FROM realties WHERE id=?",
            [id]
        )
    }
}

export default RealtyRepository;