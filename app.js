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

  const jsonPrompt = `Based on the object passed below return the same object in the following format, ${req?.body?.inputsData?.prompt}. Just return a JSON in this format, with the updated values. ${req?.body?.inputsData?.json} Respond using JSON`

  const fullPrompt = req?.body?.inputsData?.json ? jsonPrompt : prompt

  const result = await callToLlama({ content: fullPrompt || '' })
    res.json({
      text: JSON.stringify(JSON.parse(result))
    })
});

app.listen(3051, () => {
    console.log("server started on port 3051");
});
