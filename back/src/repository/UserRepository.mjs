import db from '../../database_SQL/config_db.mjs';

class UserRepository {

    async getAll(offset = 0, limit = 10) {
        const result = await db.promise().execute(
            "SELECT * FROM users LIMIT ?, ?",
            [offset, limit]
        );
        return result[0];
    }

    async countAll() {
        let result = await db.promise().execute( 
            "SELECT COUNT(*) AS nb FROM users"
        )
        return result[0][0].nb;
    }

    async getById(id) {
        const result = await db.promise().execute(
            "SELECT * FROM users WHERE id=?",
            [id]
        );
        return result[0];
    }

    async createUser(user) {
        return await db.promise().execute(
            "INSERT INTO users VALUES (null, ?, ?, ?, ?, now())",
            [user.firstname, user.lastname, user.email, user.password]
        );
    }

    async updateUser(id, entity) {
        return db.promise().query(
            "UPDATE `users` SET ? WHERE `id`=?", 
            [entity, id]
        );
    }

    async deleteUser(id) {
        const result = await db.promise().execute(
            "DELETE FROM users WHERE id=?",
            [id]
        )
        return result;
    }
}

export default UserRepository;