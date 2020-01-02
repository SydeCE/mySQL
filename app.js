const express = require('express');
const app = express();
const router = express.Router();
const data = require('./data');
const port = 3000;
const routes = requier('./routes');

router.get('/employees', routes.employees.listAllEmployees);

app.use('/api', router);

app.listen(port, () => console.info(`Server is listening on ${port}.`));