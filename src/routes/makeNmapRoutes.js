import { spawn } from "child_process"
import NmapModel from "../db/models/NmapModel.js"

const makeNmapRoutes = ({ app }) => {
  app.post("/api/nmap", async (req, res) => {
    const { ip, scanOption, secondaryScanOption, value } = req.body
    const command = spawn("nmap", [scanOption, secondaryScanOption, value, ip])
    let result = ""

    console.log(command)

    command.stdout.on("data", (data) => {
      result += data
    })
    command.stderr.on("data", (data) => {
      result += data
    })
    command.on("close", async () => {
      console.log(result)
      const commandResult = await NmapModel.create({
        ip,
        resultScan: result,
      })
      commandResult.save()
      res.send({ result: commandResult })
      console.log(commandResult)
    })
  })

  app.get("/api/nmap/history", async (req, res) => {
    try {
      const result = await NmapModel.find().sort({ date: -1 })
      res.send({ result })
    } catch (error) {
      res.status(500).send({ error: error.message })
    }
  })

  app.get("/api/nmap/history/:id", async (req, res) => {
    const { id } = req.params
    try {
      const result = await NmapModel.findById(id)
      res.send({ result })
    } catch (error) {
      res.status(500).send({ error: error.message })
    }
  })
}

export default makeNmapRoutes
