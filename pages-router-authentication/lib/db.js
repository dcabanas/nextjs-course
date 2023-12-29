import {MongoClient} from 'mongodb'

export async function connectToDatabase() {
    const connectionString = `mongodb+srv://username:password@cluster0.ntrwp.mongodb.net/auth-demo?retryWrites=true&w=majority`

    const client = await MongoClient.connect(connectionString)

    return client
}