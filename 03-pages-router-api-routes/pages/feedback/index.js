import path from 'path'
import fs from 'fs'
import { useState } from 'react'

export default function FeedbackPage(props) {
    const [feedbackData, setFeedbackData] = useState()
    function loadFeedbackHandler(id) {
        fetch('/api/feedback/' + id)
        .then(response => response.json())
        .then(data => {setFeedbackData(data.feedback)})
    }

    return (
        <>
            {feedbackData && <p>{feedbackData.email}</p>}
            <ul>
                {props.feedbackItems.map(item => (
                    <li key={item.id}>
                        {item.text}
                        <button onClick={() => loadFeedbackHandler(item.id)}>Show Details</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

/*
    We should NOT fetch/make requests to our own internal
    API ("api" folder) inside getStaticProps or getServerSideProps.
    But it is fine for external APIs
 */
export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'data', 'feedback.json')
    const fileData = fs.readFileSync(filePath)
    const data = JSON.parse(fileData)

    return {
        props: {
            feedbackItems: data
        }
    }
}