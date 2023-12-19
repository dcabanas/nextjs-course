import { connectDb, getAllDocuments, insertDocument } from '../../../../helpers/db-util'

export default async function handler(req, res) {
    const eventId = req.query.eventId

    let client
    try {
        client = await connectDb()
    }
    catch (error) {
        res.status(500).json({message: 'Connecting to the database failed!'})
        return
    }

    if (req.method === 'POST') {
        // add server-side validation

        const {email, name, text} = req.body
        if (!email.includes('@') || !name || name.trim() === '' || !text || text.trim() === '') {
            res.status(422).json({message: 'Invalid input'})
            await client.close()
            return
        }

        const newComment = {
            //id: new Date().toISOString(),
            email, name, text,
            eventId
        }

        try {
            const result = await insertDocument(client, 'comments', newComment)
            console.log(result)

            console.log(newComment)
            res.status(201).json({message: 'Added comment', comment: newComment})
        }
        catch (error) {
            res.status(500).json({message: 'Inserting comment failed!'})
        }

    }

    if (req.method === 'GET') {
        try {
            const documents = await getAllDocuments(client, 'comments', {_id: -1})
            res.status(200).json({comments: documents})
        }
        catch (error) {
            res.status(500).json({message: 'Getting comments failed!'})
        }
    }

    await client.close()
}