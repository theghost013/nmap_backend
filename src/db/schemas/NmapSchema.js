import { Schema } from "mongoose"

const NmapSchema = new Schema(
  {
    ip: {
      type: String,
      required: true,
    },
    resultScan: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
)

export default NmapSchema
