import React from 'react'
import { Link } from 'react-router'

export const Home = ({children}) => (
   <div className="jumbotron col-sm-12 text-center">
      <h1>Github battle</h1>
      <p className="lead">
         Some fancy motto
      </p>
      <Link to='/playerOne' >
         <button type="button" className="btn btn-lg btn-success">
            Get started
         </button>
      </Link>
   </div>
)
