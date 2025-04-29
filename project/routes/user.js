const { Router } = require("express");
const User = require("../models/user");
const userController = require("../controllers/user");

const router = Router();
router.get("/", userController.get);
router.post("/", userController.post);

module.exports = router;
