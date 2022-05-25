import { useState } from "react"
import FeedbackData from "./data/FeedbackData"
import FeedbackList from "./Components/FeedbackList"
import Header from "./Components/Header"


function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    return (
        <>
            <Header text='Review UI' />
            <FeedbackList feedback={feedback} />
        </>

    )
}

export default App