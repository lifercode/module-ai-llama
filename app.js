const cors = require('cors')
const express = require("express");
const { callToLlama } = require('./call-to-llama');

const app = express();

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
  res.json({ base: 'ai-llama ok' })
});

app.post("/chat", async (req, res) => {
    const result = await callToLlama({ content: req?.body?.prompt || '' })
    res.json({
      text: result
    })
});

app.listen(3051, () => {
    console.log("server started on port 3051");
});
