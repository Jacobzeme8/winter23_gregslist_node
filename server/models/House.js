import { Schema } from "mongoose";


export const HouseSchema = new Schema(
  {
    floors: { type: Number, required: true, min: 1},
    bathrooms: { type: Number, required: true, min:1},
    bedrooms:{ type: Number, required: true, min:1},
    price: { type: Number, required: true, min:10000},
    description: { type: String},
    sold: { type: Boolean, required: true, default:false}
  },
  { timestamps: true, toJSON: { virtuals: true } }
)