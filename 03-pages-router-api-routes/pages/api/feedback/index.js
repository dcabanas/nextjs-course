import path from 'path'
import fs from 'fs'

/*
    files nested inside the "api" folder are treated
    in a special way by NextJS. By convention these functions
    are called handlers because NextJs will use them to
    handle incoming requests for a specific route, in this case,
    "/api/feedback".
    These handlers also don't return HTML code and allow us to
    execute any server-side code
 */
export default function handler(req, res) {
    if (req.method === 'POST') {
        const email = req.body.email
        const feedbackText = req.body.text

        const newFeedback = {
            id: new Date().toISOString(),
            email: email,
            text: feedbackText
        }

        const filePath = path.join(process.cwd(), 'data', 'feedback.json')
        const fileData = fs.readFileSync(filePath)
        const data = JSON.parse(fileData)
        data.push(newFeedback)
        fs.writeFileSync(filePath, JSON.stringify(data))

        res.status(201).json({message: 'Success!', feedback: newFeedback})
    }
    else {
        res.status(200).json({message: 'This works!'})
    }
}