const express = require("express");
const Auction = require("../models/Auction");

const router = express.Router();

// Delete Auction
router.delete("/:id", async (req, res) => {
  try {
    await Auction.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Auction deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete auction" });
  }
});

// Edit Auction
router.put("/:id", async (req, res) => {
  try {
    const updatedAuction = await Auction.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedAuction);
  } catch (error) {
    res.status(500).json({ error: "Failed to edit auction" });
  }
});

module.exports = router;
