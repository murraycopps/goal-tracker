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
        const data = (await request.formData())
        const type = data.get("submitType")?.toString()
        const id = parseInt(data.get("id")?.toString() || "-1")

        console.log (type, type == "complete")
        data.delete("submitType")
        data.delete("id")
        const parsedData = Object.fromEntries(data)
        
        if (type === "add") {
            const client = new MongoClient(MONGODB_URI)
            await client.connect()
            const db = client.db("goals")
            const collection = db.collection("goals")
            const lastId = await collection.find().sort({ id: -1 }).limit(1).toArray()
            const goal = { ...parsedData, completed: false, id: lastId[0].id + 1 }


            await collection.insertOne(goal)
        }
        if (type === "delete") {
            const client = new MongoClient(MONGODB_URI)
            await client.connect()
            const db = client.db("goals")
            const collection = db.collection("goals")
            await collection.deleteOne({ id })
        }
        if(type === "complete") {
            const client = new MongoClient(MONGODB_URI)
            await client.connect()
            const db = client.db("goals")
            const collection = db.collection("goals")
            await collection.updateOne({ id }, { $set: { completed: true } })
        }
        if(type === "uncomplete") {
            const client = new MongoClient(MONGODB_URI)
            await client.connect()
            const db = client.db("goals")
            const collection = db.collection("goals")
            await collection.updateOne({ id }, { $set: { completed: false } })
        }
        if(type === "edit") {
            const client = new MongoClient(MONGODB_URI)
            await client.connect()
            const db = client.db("goals")
            const collection = db.collection("goals")
            const goal = await collection.findOne({ id })
            const updatedGoal = { ...goal, ...parsedData }
            await collection.updateOne({ id }, { $set: updatedGoal })
        }
    }
}