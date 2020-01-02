function listAllEmployees(req,res) {
    const connection = req.app.locals.connection;
    connection.query('SELECT * FROM edaDB.employees;', (error, result) => {
        if (error) {
            return res.status(500).json(error);
        }
        return res.status(200).json(result);
    });
}

module.exports = {
    listAllEmployees
};