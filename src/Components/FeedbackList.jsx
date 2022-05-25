import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'

const FeedbackList = ({ feedback }) => {
    if (!feedback || feedback.length === 0) {
        return (
            <p> No Feedback</p>
        )
    }
    return (

        <div className="feedback-list">
            {feedback.map((item) => {
                return <FeedbackItem key={item.id} item={item} />
            })}
        </div>
    )

}

// **** Setting the shape of the array in the PropTypes ****

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
        })
    )
}

export default FeedbackList