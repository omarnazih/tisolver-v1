// import {createClient} from '@sanity/client'
import {createClient} from 'https://esm.sh/@sanity/client'

const client = createClient({
  projectId: '1iv23tih',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

export async function getAllPosts() {
  try {
    const posts = await client.fetch(`
      *[_type == "post"]
      | order(publishedAt desc)
    `)
    return posts
  } catch (error) {
    console.error('Error fetching posts:', error)
    throw error
  }
}
