import path from 'path'
import fs from 'fs'

export default function handler(req, res) {
    if (req.method === 'DELETE') {
        // delete an item (dynamic route work for all HTTP methods)
    }
    const feedbackId = req.query.feedbackId

    const filePath = path.join(process.cwd(), 'data', 'feedback.json')
    const fileData = fs.readFileSync(filePath)
    const data = JSON.parse(fileData)

    const selectedFeedback = data.find(feedback => feedback.id === feedbackId)

    res.status(200).json({feedback: selectedFeedback})
}