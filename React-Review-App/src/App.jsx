import { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import FeedbackData from "./data/FeedbackData"
import FeedbackList from "./Components/FeedbackList"
import Header from "./Components/Header"
import FeedbackStats from "./Components/FeedbackStats"
import FeedbackForm from "./Components/FeedbackForm"
import AboutPage from "./Components/pages/AboutPage"
import AboutIconLink from './Components/AboutIconLink.jsx'

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteReview = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback,])
    }

    return (
        <>
            <Router>
                <Header text='Feedback UI' />
                <div className='container'>
                    <Routes>
                        <Route
                            path='/'
                            element={
                                <>
                                    <FeedbackForm handleAdd={addFeedback} />
                                    <FeedbackStats feedback={feedback} />
                                    <FeedbackList feedback={feedback} handleDelete={deleteReview} />
                                </>
                            }
                        ></Route>

                        <Route path='/about' element={<AboutPage />} />
                    </Routes>

                </div>
                <AboutIconLink />
            </Router>
        </>

    )
}

export default App