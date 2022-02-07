const express = require("express");
const router = express.Router();
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

const { getUsers } = require("../controller/usersController");

router.get("/", decorateHtmlResponse("Users"), getUsers);

module.exports = router;
