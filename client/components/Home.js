import React from 'react'
import {connect} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


/**
 * COMPONENT
 */
export const Home = props => {
  const {username} = props

  return (
    <div className="container homepage">
      <div className="info" style={{display: 'flex', flexDirection: 'column', padding: '2rem 2rem'  }}>
      <h4 className="user">Hi there, <span className="color-peach"> { username } </span></h4>
      <h1 style={{color: 'white'}}>Non-Alcoholic Spirits</h1>
      <h2 style={{color: 'white'}}>WineCella is on a mission to change the <br/> way the world thinks with the highest quality <br/> non-alcoholic options.</h2>
      <Link to='/products'>      
        <div className="rotate">
           <span className="bg"></span>
          <FontAwesomeIcon icon={ faLongArrowAltRight } />        
        </div>
      </Link>
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