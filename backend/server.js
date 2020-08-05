//require("dotenv").config();
// middlewares
const express = require("express")
const mongoose= require("mongoose")
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
const edamamApi = require('./Api/edamamApi');

// setting server port
const PORT = 3030

app.use(cors({ origin: '*' }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/whatRecipe', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.use('/edamam', edamamApi);

app.listen(PORT, () => {
    console.log("Server is listening on PORT: " + PORT);
});
