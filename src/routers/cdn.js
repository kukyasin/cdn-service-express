const express = require("express");
const CdnData = require("../models/CDNData");
const router = new express.Router();
require("dotenv").config();

router.post("/cdn", async (req, res) => {
  const data = new CdnData({
    ...req.body,
  });
  try {
    await data.save();
    res.status(201).send(data);
  } catch (e) {
    res.status(400).send({ error: "Bad Request" });
  }
});

const SECRET_TOKEN = process.env.ACCESS_TOKEN;

router.get("/cdn", async (req, res) => {
  const token = req.query.token;

  if (token === SECRET_TOKEN) {
    const data = await CdnData.find();
    try {
      res.status(200).send(data);
    } catch (e) {
      return res.status(400).send({ error: "Bad Request" });
    }
  } else {
    return res.status(401).send({ error: "Unauthorized" });
  }
});

router.delete("/cdn", async (req, res) => {
  const token = req.query.token;

  if (token === SECRET_TOKEN) {
    try {
    } catch (e) {}
  }
});

module.exports = router;
