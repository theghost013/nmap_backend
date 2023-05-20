import "dotenv/config"

const config = {
  port: process.env.PORT || 4000,
  db: {
    uri: process.env.DB_URI || "mongodb://127.0.0.1:27017/nmap",
  },
}

export default config
