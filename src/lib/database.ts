import { MONGODB_URI } from '$env/static/private';
import { MongoClient } from "mongodb"

const uri = MONGODB_URI || ""


const loadGoals = async () => {
    const client = new MongoClient(uri)
    await client.connect()
    const db = client.db("goals")
    const collection = db.collection("goals")
    const goals = await collection.find().toArray()
    client.close()
    return goals
}

const saveGoal = async (goal: any) => {
    const client = new MongoClient(uri)
    await client.connect()
    const db = client.db("goals")
    const collection = db.collection("goals")
    await collection.insertOne(goal)
    client.close()
}

const deleteGoal = async (id: string) => { 
    const client = new MongoClient(uri)
    await client.connect()
    const db = client.db("goals")
    const collection = db.collection("goals")
    await collection.deleteOne({ id })
    client.close()
}

const insertExampleData = async () => {
    const client = new MongoClient(uri)
    await client.connect()
    const db = client.db("goals")
    const collection = db.collection("goals")
    const lastId = await collection.find().sort({ id: -1 }).limit(1).toArray()
    const example:Goal[] = [
        {
            id: 1,
            name: "4:15 Mile",
            type: "long",
            at: "4:24",
            completed: false
        },
        {
            id: 2,
            name: "4:00 1500m",
            type: "long",
            at: "4:18",
            completed: false
        }
    ]
    await collection.insertMany(example)
    client.close()
}

export { loadGoals, saveGoal, deleteGoal, insertExampleData }