import React from 'react'
import ReactDOM from 'react-dom'

const HelloWorld = ({ name }) => (
   <div>Hello {name ? name : 'World'}</div>
)

ReactDOM.render(<HelloWorld name="Linesh"/>, document.getElementById('app'))