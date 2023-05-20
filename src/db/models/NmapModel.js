import NmapSchema from "../schemas/NmapSchema.js"
import mongoose from "mongoose"

const NmapModel = mongoose.modelNames().includes("Nmap")
  ? mongoose.model("Nmap")
  : mongoose.model("Nmap", NmapSchema)

export default NmapModel
