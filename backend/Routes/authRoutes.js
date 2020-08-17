const router = require("express").Router();

// login
router.get("/login", (req, res) => {
    res.render("login");
})
// logout
router.get("/logout", (req,res) => {
    // logging out with passport
    res.send("logging out")
})
router.get("/google", (req, res) => {
    // passport goes here
    console.log("logging in with google")
    res.send("Logging in with google")
})

module.exports = router;