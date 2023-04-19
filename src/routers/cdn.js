const express = require("express");
const CdnData = require("../models/CDNData");
const router = new express.Router();

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

router.get("/cdn", async (req, res) => {
  const data = await CdnData.find();
  try {
    res.status(200).send(data);
  } catch (e) {}
});

module.exports = router;
