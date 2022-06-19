import PropTypes from 'prop-types'
import Card from "./shared/Card"
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackItem = ({ item }) => {
    const { deleteReview, editFeedback } = useContext(FeedbackContext)

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => deleteReview(item.id)} className="close">
                <FaTimes color='purple' />
            </button>
            <button className='edit'>
                <FaEdit onClick={() => editFeedback(item)} color='purple' />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem