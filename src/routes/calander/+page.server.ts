import { MONGODB_URI } from '$env/static/private';
import { MongoClient } from "mongodb"

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}
const client = new MongoClient(MONGODB_URI)
export async function load() {
    console.log('Connecting to MongoDB...')
    await client.connect()
    const db = client.db("goals")
    const collection = db.collection("calander")
    const goals = await collection.find().toArray()
    client.close()

    return { goals: JSON.stringify(goals) }
}