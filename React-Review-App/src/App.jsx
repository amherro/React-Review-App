import { useState } from "react"
import FeedbackData from "./data/FeedbackData"
import FeedbackList from "./Components/FeedbackList"
import Header from "./Components/Header"


function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteReview = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (
        <>
            <Header text='Review UI' />
            <FeedbackList feedback={feedback} handleDelete={deleteReview} />
        </>

    )
}

export default App