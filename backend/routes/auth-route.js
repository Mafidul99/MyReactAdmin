const express = require("express");
const router = express.Router();

const authMiddleware =require("../middlewares/auth-middleware.js");
const authcontrollers = require("../controllers/auth-controller.js");
const {signupSchema, loginSchema} = require("../utils/auth-validator.js");
const validate = require('../middlewares/validate-middlewar.js');

router.route("/").get(authcontrollers.home);
router.route("/register").post(validate(signupSchema), authcontrollers.register);
router.route("/login").post( validate(loginSchema), authcontrollers.login);
router.route("/user").get(authMiddleware, authcontrollers.user);

module.exports = router;