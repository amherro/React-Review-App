// import {motion, AnimatePresence} from 'framer-motion'
import FeedbackItem from './FeedbackItem'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Spinner from './shared/Spinner'


const FeedbackList = () => {
    const { feedback, isLoading } = useContext(FeedbackContext)

    if (!isLoading && (!feedback || feedback.length === 0)) {
        return (
            <p> No Feedback</p>
        )
    }

    // *** With Animation (Didn't work for me but did on video with same code) ***
    // return (


    //     <div className='feedback-list'>
    //         <AnimatePresence>
    //             {feedback.map((item) => (
    //             <motion.div
    //                 key={item.id}
    //                 initial={{ opacity: 0 }}
    //                 animate={{ opacity: 1 }}
    //                 exit={{ opacity: 0 }}
    //                 layout
    //             >
    //                 <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
    //             </motion.div>
    //             ))}
    //         </AnimatePresence>
    //     </div>
    // )

    // *** Without Animation ***

    return isLoading ? <Spinner /> : <div className="feedback-list">
        {feedback.map((item) => {
            return <FeedbackItem key={item.id} item={item} />
        })}
    </div>
   

}

// **** Setting the shape of the array in the PropTypes ****

// FeedbackList.propTypes = {
//     feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             text: PropTypes.string.isRequired,
//             rating: PropTypes.number.isRequired
//         })
//     )
// }

export default FeedbackList