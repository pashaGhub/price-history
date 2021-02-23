const { Router } = require("express");
const fetch = require("node-fetch");
const router = Router();

// /api/getPriceHistory/:startDate/:endDate
// example: http://localhost:5000/api/getPriceHistory/2020-02-16/2020-02-17
router.get("/:startDate/:endDate", async (req, res) => {
  try {
    const startDate = req.params.startDate;
    const endDate = req.params.endDate;

    const response = await fetch(
      `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`
    );

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const data = await response.json();

    //multiplies bpi's by 1000
    Object.keys(data.bpi).map((key) => {
      data.bpi[key] *= 1000;
    });

    res.status(201).json(data);
  } catch (e) {
    res
      .status(500)
      .json({ message: e ? e.message : "Something went wrong..." });
  }
});

module.exports = router;
