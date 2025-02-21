// app.js
const express = require("express")
const axios = require("axios")
const app = express()
const port = 3000

app.get("/", (req, res) => {
  res.send("RIN Stat backend!!!")
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})

app.use(express.json())
app.post("/create-post", async (req, res) => {
  try {
    // Simulate the data to send in the POST request
    const postData = {
      title: req.body.title,
      body: req.body.body,
      userId: 1,
    }
    // Make a POST request using axios
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      postData
    )

    // Send back the response from the API
    res.status(201).json({
      message: "Post created successfully!",

      data: response.data,
    })
  } catch (error) {
    // Handle error and send response
    res.status(500).json({
      message: "Error occurred while creating the post",
      error: error.message,
    })
  }
})
