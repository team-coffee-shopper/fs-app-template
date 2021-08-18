import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const Home = props => {
  const {username} = props

  return (
    <div className="container homepage">
      <h3>Welcome, {username}</h3>
      <div className="info" style={{display: 'flex', flexDirection: 'column', padding: '2rem 2rem'  }}>
      <h1 style={{color: 'white'}}>Non-Alcoholic Spirits</h1>
      <h2 style={{color: 'white'}}>WineCella is on a mission to change the <br/> way the world thinks with the highest quality <br/> non-alcoholic options.</h2>
      <img src="../assets/enjoy-your-wine.png" width="110px" style={{}}></img>
      </div>

    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.auth.username
  }
}

export default connect(mapState)(Home)