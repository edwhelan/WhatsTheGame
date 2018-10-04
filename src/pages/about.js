import React from 'react'
import Link from 'gatsby'

const AboutPage = () => (
  <div style={{height: '100vh'}}>
  <div id='aboutPage' style={{
    padding: '0 1em 1em 1em',
    margin: 'auto',
    border: '2.5px solid #e0dbd1',
    backgroundColor: 'rgba(68, 82, 127, .9)',
    color: '#e0dbd1',
    textAlign: 'center',
    width: '75%',

  }}>
    <h1>My name is Edward</h1>
    <p>I built this site as a tool for me to easily check the current scores of the day and see what time games start. If you are interested in my work please check out <a href='http://www.EdWhe.com'> EdWhe.com </a>.</p>
    <Link to="/">Go back to the games</Link>
  </div>
  </div>
)

export default AboutPage
