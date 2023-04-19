const express = require("express");
const CdnData = require("../models/CDNData");
const router = new express.Router();
require("dotenv").config();

router.post("/cdn", async (req, res) => {
  const {
    client_created_at,
    mobile_phone,
    sender_store,
    cart_created_at,
    products,
    full_name,
  } = req.body;
  const dateObj = new Date(client_created_at);
  dateObj.setHours(dateObj.getHours() + 3);
  const adjustedTimestamp = dateObj.getTime();
  const humanReadable = new Date(adjustedTimestamp).toISOString().slice(0, 19);

  const data = new CdnData({
    sender_store,
    full_name,
    mobile_phone,
    products,
    cart_created_at,
    client_created_at: humanReadable,
  });
  try {
    await data.save();
    res.status(201).send({ success: "Pushouse Consumed the Data" });
  } catch (e) {
    console.log(e);
    res.status(400).send({ error: "Bad Request" });
  }
});

const SECRET_TOKEN = process.env.ACCESS_TOKEN;

router.get("/cdn", async (req, res) => {
  const token = req.query.token;
  const store_name = req.query.store_name;

  if (token === SECRET_TOKEN) {
    const data = await CdnData.find({ sender_store: store_name }).exec();
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
