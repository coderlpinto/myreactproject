// index.js
import React from 'react'
import ReactDOM from 'react-dom'
// To get the root element from the HTML document
import sublime from './images/sublime.png'

const user = (
  <div>
    <img src={sublime} alt='sublime' />
  </div>
)

// JSX element, main
const main = (
  <main>
    <div className='main-wrapper'>
      {user}
    </div>
  </main>
)

// JSX element, app
const app = (
  <div className='app'>
    {main}
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)