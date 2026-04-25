const pool = require("../config/db.js");

const registerController = async (req, res) => {
    try {
        const { username, email, password, phone_no, address } = req.body;
        console.log("Get the details of Data:",username, email, password, phone_no, address);
        if (!username || !email || !password || !phone_no || !address) {
            console.log("Missing required fields");
            return res.status(400).send({
                success: false,
                message: "Please fill all fields"
            });
        }
        // check user 
        const checkUserQuery = 'SELECT * FROM users WHERE email = $1';
        const existingUser = await pool.query(checkUserQuery, [email]);

        // In node-postgres, the results are found inside the .rows array
        if (existingUser.rows.length > 0) {
            console.log("User Already Exists");
            return res.status(409).send({ // Updated to 409 Conflict
                success: false,
                message: "User Email already exists, Please use a different email"
            });
        }
        console.log("Creating new user started in sql...");
        // create a new user 
        const user = await pool.query('INSERT INTO users (username, email, password, phone_no, address) VALUES ($1, $2, $3, $4, $5) RETURNING *', [username, email, password, phone_no, address]);
        console.log("User Entry in SQL query:", user);
        res.status(200).send({
            success: true,
            message: "User registered successfully"
        });
    } catch (error) {
        console.error("Error occurred while registering user:", error);
        res.status(500).send({
            success: false,
            message: error || "Error occurred while registering user"
        });
    }
}
module.exports = { registerController }