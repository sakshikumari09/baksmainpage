import mongoose from "mongoose";

const restaurantItemsSchema = new mongoose.Schema(
  {
    restaurant_id: {
      type: String,
    },
    restaurant_name: {
      type: String,
    },
    food_items: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FoodItems",
      },
    ],
    cgst:{
      type:String,
    },
    sgst:{
      type:String,
    },
    nooftables:{
      type:String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.RestaurantItems ||
  mongoose.model("RestaurantItems", restaurantItemsSchema);
  