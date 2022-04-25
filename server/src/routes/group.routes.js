const express = require("express");
const router = express.Router();

const MainDB = require("../api/db");

// Run server and try to go to http://localhost:3001/api/
router.get("/", (req, res) => {
    // write code to query
    MainDB.db.all("SELECT * FROM groups", (err, rows) => {
        if (err) return err;

        res.json({
            rows,
        });
    });
});

router.post("/create", (req, res) => {
    const { group_id, user_id, group_name, description } = req.body;
    const sql = `INSERT INTO group (group_id, user_id, group_name, description)
VALUES ("${group_id}", "${user_id}", "${group_name}", "${description}")`;
    MainDB.db.run(sql, (err) => {
        if (err) {
            return console.log(err.message);
        }
        // get the last insert id
        console.log(`A row has been inserted!`);
    });
    res.send(sql);
});

module.exports = router;
