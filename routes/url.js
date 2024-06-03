const express = require("express");

/* importing controller functions */

const {
  handleGenerateNewShortURL,
  handleGetAnalytics,
} = require("../controllers/url");

const router = express.Router();

router.post("/", handleGenerateNewShortURL);

router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
