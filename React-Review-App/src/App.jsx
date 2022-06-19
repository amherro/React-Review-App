import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FeedbackList from "./Components/FeedbackList"
import Header from "./Components/Header"
import FeedbackStats from "./Components/FeedbackStats"
import FeedbackForm from "./Components/FeedbackForm"
import AboutPage from "./Components/pages/AboutPage"
import AboutIconLink from './Components/AboutIconLink.jsx'
import { FeedbackProvider } from "./context/FeedbackContext"


function App() {
    return (
        <FeedbackProvider>
            <Router>
                <Header text='Feedback UI' />
                <div className='container'>
                    <Routes>
                        <Route
                            path='/'
                            element={
                                <>
                                    <FeedbackForm />
                                    <FeedbackStats />
                                    <FeedbackList />
                                </>
                            }
                        ></Route>

                        <Route path='/about' element={<AboutPage />} />
                    </Routes>

                </div>
                <AboutIconLink />
            </Router>
        </FeedbackProvider>

    )
}

export default App