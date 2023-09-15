const express = require('express')
const app = express()
const port = process.env.PORT || 3000 // Set your desired port

import {createClient} from '@sanity/client'
// Configure any middleware you need (body parser, CORS, etc.)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

// Example route to fetch a list of videos
app.get('/api/videos', async (req, res) => {
  try {
    const videos = await client.fetch('*[_type == "video"]')
    res.json(videos)
  } catch (error) {
    console.error(error)
    res.status(500).json({error: 'Internal server error'})
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
