require("dotenv").config();
// middlewares
const express = require("express")
const mongoose= require("mongoose")
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();

// setting server port
const PORT = 3030

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/whatRecipe', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.listen(PORT, () => {
    console.log("Server is listening on PORT: " + PORT);
});
