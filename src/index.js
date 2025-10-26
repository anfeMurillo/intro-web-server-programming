const express = require('express');
const setRoutes = require('./routes/tasks');
const logger = require('./middleware/logger');

const app = express();
app.use(express.json());
app.use(logger);

setRoutes(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});