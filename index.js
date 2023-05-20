import cors from "cors"
import express from "express"
import mongoose from "mongoose"
import config from "./src/config.js"
import makeNmapRoutes from "./src/routes/makeNmapRoutes.js"

const app = express()
const ctx = { app }

await mongoose.connect(config.db.uri)

app.use(cors())
app.use(express.json())

makeNmapRoutes(ctx)

app.listen(config.port, () => console.log(`Listening on :${config.port}`))
