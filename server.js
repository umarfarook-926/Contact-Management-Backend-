const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const contactRoutes = require("./src/routes/contactRoutes");
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/contacts", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));


module.exports = app;