import mongoose from "mongoose";

export const restaurantdetailsSchema = new mongoose.Schema(
  {
    restaurantname: {
      type: String,
      required: true,
    },
    restaurantid: {
      type: String,
      required: true,
    },
    restaurantlocation: {
      type: String,
    },
    restaurantphoneNo: {
      type: String,
      required: true,
    },
    restaurantemail: {
      type: String,
      required: true,
    },
    restaurantwebsite: {
      type: String,
    },
    restaurantaddress: {
      type: String,
      required: true,
    },
    restaurantopeninghours: {
      type: String,
      required: true,
    },
    restaurantclosinghours: {
      type: String,
      required: true,
    },
    restaurantdescription: {
      type: String,
    },
    restaurantimage: {
      type: String,
    },
    noofchef: {
      type: String,
    },
    noofemployees: {
      type: String,
    },
    nooftables: {
      type: String,
    },
    noofwaiters: {
      type: String,
    },
    noofseatingcapacity: {
      type: String,
    },
    sgst:{
      type: String,
    },
    cgst:{
      type: String,
    },
    gstin:{
      type: String,
    },
    verified:{
      type: Boolean,
      default: false,
    }
  },
  { timestamps: true }
);

const RestaurantDetails =
  mongoose.models.RestaurantDetails ||
  mongoose.model("RestaurantDetails", restaurantdetailsSchema);

export default RestaurantDetails;