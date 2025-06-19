import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'

// import Chai from './chai.jsx'
// createRoot(document.getElementById('root').render(
//   <Chai />
// ))

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit Google'
// }

// const newElement = (<a href='https://www.google.com' target='_blank'>Visit Google</a>)
// createRoot(document.getElementById('root')).render(

//     newElement 
// )


// const reactElement = React.createElement(
//   'a',
//   {href: 'https://www.google.com', target: '_blank'},
//   'Click me to visit Google'
// )
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//   {reactElement}
//   </StrictMode>
// )


createRoot(document.getElementById('root')).render(

  <App />

)

