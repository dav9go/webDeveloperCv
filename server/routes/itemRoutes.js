import express from "express";
import * as dotenv from "dotenv";

import Item from "../mongodb/models/Item.js";

dotenv.config();

const router = express.Router();

// GET ITEMS LIKES
router.route("/").get(async (req, res) => {
  try {
    const itemsArray = await Item.find({});

    res.status(200).json({ data: itemsArray });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

//ADD ITEM LIKES

router.route("/add").post(async (req, res) => {
  console.log(req.body);
  const name = req.body.name;

  try {
    const itemLiked = await Item.findOneAndUpdate(
      { name },
      {
        $inc: {
          likes: 1,
        },
      },
      {
        new: true,
      }
    );
    res.status(200).json({ data: itemLiked });
  } catch (error) {
    console.log(error);
    res.json(500).send(error);
  }
});

export default router;
