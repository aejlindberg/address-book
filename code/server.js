import express from "express"

const app = express()
const contacts = require("./contacts.json")

app.get("/", (req, res) =>
  res.send("Address book")
)

app.get("/contacts", (req, res) => {
  res.json({contacts})
})

app.get("/contacts/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const singleContact = contacts.contacts.find(item => item.id === id)
  if (singleContact) {
    res.send(singleContact)
  } else {
    res.status(404)
    res.send("Not found")
  }
})

app.listen(3000, () =>
  console.log("Example app listening on port 3000!")
)
