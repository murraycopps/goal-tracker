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
    const collection = db.collection("goals")
    const goals = await collection.find().toArray()
    client.close()

    return { goals: JSON.stringify(goals) }
}


export const actions = {
    default: async ({ request }) => {
        const data = await request.formData()


        const client = new MongoClient(MONGODB_URI)
        await client.connect()
        const db = client.db("goals")
        const collection = db.collection("goals")
        const lastId = await collection.find().sort({ id: -1 }).limit(1).toArray()
        const goal = { ...Object.fromEntries(data), completed: false, id: 3 }


        await collection.insertOne(goal)
    }
}