const chalk = require("chalk");
const express = require("express")
const mongoose= require("mongoose")
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
const edamamApi = require('./Api/edamamApi');

// the auth routes
const authRoutes = require("./Routes/authRoutes")

// auth routes setup
app.use("/auth", authRoutes)

// setting server port
const PORT = process.env.PORT || 3030

app.use(cors({ origin: '*' }));
app.use(bodyParser.json());

mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/whatRecipe', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log(chalk.green("MongoDB database connection established successfully"));
})

app.use('/edamam', edamamApi);

app.listen(PORT, () => {
    console.log(chalk.green("Server is listening on PORT: " + PORT));
});
