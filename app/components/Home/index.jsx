/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router'

const Home = () => (
  <div className="jumbotron col-sm-12 text-center">
    <h1>Github battle</h1>
    <p className="lead">Some fancy motto</p>
    <Link to="/playerOne" >
      <button type="button" className="btn btn-lg btn-success">
        Get started
      </button>
    </Link>
  </div>
)

export default Home
