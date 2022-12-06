mongodb = require('mongodb');

let users; 

module.exports = class UserDAO {
    static async injectDB(conn) {
        if(users) {
            return;
        }
        try {
            users = await conn.db("users").collection("details");
            console.log("Connected to Database..");
        }catch(e) {
            console.error("Unable to establish collection handles in userDAO: " + e);
        }
    }
}