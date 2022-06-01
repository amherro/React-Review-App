import { useState } from "react"
import FeedbackData from "./data/FeedbackData"
import FeedbackList from "./Components/FeedbackList"
import Header from "./Components/Header"
import FeedbackStats from "./Components/FeedbackStats"
import FeedbackForm from "./Components/FeedbackForm"


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
            <div className="container">
                <FeedbackForm />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteReview} />
            </div>
        </>

    )
}

export default App