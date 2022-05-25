import PropTypes from 'prop-types'

const Card = ({ children, reverse }) => {
    return (

        // **** Conditional Styling (classes and CSS) ****
        <div className={`card ${reverse && 'reverse'}`}>
            {children}
        </div>

        // **** Conditional Styling (Inline) ****
        // <div className="card" style={{
        //     backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
        //     color: reverse ? '#fff' : '#000',
        // }}> 
        //     {children}
        // </div>
    )
}

Card.defaultProps = {
    reverse: false,
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}

export default Card