import mongoose from "mongoose";

const Item = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
});

const ItemSchema = mongoose.model("Item", Item);

export default ItemSchema;
