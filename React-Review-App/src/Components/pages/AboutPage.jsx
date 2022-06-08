import React from 'react'
import Card from '../shared/Card'

const About = () => {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a React App to leave feedback for a product or service</p>
        <p>Version 1.0.0</p>
      </div>
      <p>
        <a href="/">Back To Home</a>
      </p>
    </Card>
  )
}

export default About