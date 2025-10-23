const express = require("express");
const router = express.Router();

const authMiddleware =require("../middlewares/auth-middleware");
const authcontrollers = require("../controllers/auth-controller");
// const {signupSchema, loginSchema} = require("../validators/auth-validator");
// const validate = require('../middlewares/validate-middlewar');

router.route("/").get(authcontrollers.home);
router.route("/register").post( authcontrollers.register);
router.route("/login").post( authcontrollers.login);
router.route("/user").get(authMiddleware, authcontrollers.user);

module.exports = router;