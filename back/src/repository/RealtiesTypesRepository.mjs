import db from '../../database_SQL/config_db.mjs';

class RealtyTypeRepository {
    
    async getAll() {
        const result = await db.promise().execute(
            "SELECT * FROM types_realties"
        );
        return result[0];
    } 

    async getById(id) {
        const result = await db.promise().execute(
            "SELECT * FROM types_realties WHERE id=?",
            [id]
        );
        return result[0];
    }

    async createRealtyType(type) {
        const result = await db.promise().execute(
            "INSERT INTO types_realties VALUES (null, ?)",
            [type.title]
        );
        return result;
    }

    async updateRealtyType(id, data) {
        return db.promise().query(
            "UPDATE `types_realties` SET ? WHERE `id`=?", 
            [data, id]
        );
    }

    async deleteRealtyType(id) {
        return await db.promise().execute(
            "DELETE FROM types_realties WHERE id=?",
            [id]
        );
    }
}

export default RealtyTypeRepository;


