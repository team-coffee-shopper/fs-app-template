import React from 'react'
import {connect} from 'react-redux'
import {authenticate} from '../store'
import GoogleLogin from 'react-google-login'

/**
 * COMPONENT
 */
const SignUp = props => {
  const {name, displayName, handleSubmit, error} = props;
  
  const responseGoogle = (response)=>{
    console.log(response)
    console.log(response.profileObj)
  }
 
  return (
    <div style={{backgroundColor: 'black'}}>
      <form onSubmit={handleSubmit} name={name}>
      <div className="loginEdit">
      <h1>Sign Up to Your Account</h1>
          <p>Explore our non-alcoholic wine selection and make a puchace by logging in to your account.</p>
          {/* <label htmlFor="username">
            <small>Username</small>
          </label> */}
          {/* <input name="username" type="text" placeholder="username" /> */}
<div class="form-outline">
  <input type="text" name="username" id="form1" class="form-control" placeholder="Username" style={{color: 'white', backgroundColor: '#141414', border: 'black solid 1px', padding: '2rem 4rem'}} />
  {/* <label class="form-label" for="form1">Username</label> */}
</div>
<br/>
<div class="form-outline">
  <input type="text" name="email" id="form1" class="form-control" placeholder="Email" style={{color: 'white', backgroundColor: '#141414', border: 'black solid 1px', padding: '2rem 4rem'}} />
  {/* <label class="form-label" for="form1">Username</label> */}
</div>
<br/>
<div class="form-outline">
  <input type="text" name="address" id="form1" class="form-control" placeholder="Address" style={{color: 'white', backgroundColor: '#141414', border: 'black solid 1px', padding: '2rem 4rem'}} />
  {/* <label class="form-label" for="form1">Username</label> */}
</div>
<br/>
{/*         
          <label htmlFor="password">
            <small>Password</small>
          </label> */}
          {/* <input name="password" type="password" placeholder="password"/> */}
          <div class="form-outline">
  <input type="text" name="password" id="form1" class="form-control" placeholder="Password" style={{color: 'white', backgroundColor: '#141414', border: 'black solid 1px', padding: '2rem 4rem'}}/>
  {/* <label class="form-label" for="form1">Password</label> */}
</div>
          <br/>
          <button type="submit" style={{color: 'grey', backgroundColor: 'white', border: 'black solid 1px', padding: '1rem 2rem'}}>{displayName} in to Your Account ➟ </button>
          </div>
        {error && error.response && <div> {error.response.data} </div>}

        <div className="google">
          <GoogleLogin
          clientId="1058116808147-savon90a46im5l8hv4jr18gqmmj7147e.apps.googleusercontent.com"
          buttonText="Log in with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          />
        </div>
      </form>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.auth.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.auth.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const username = evt.target.username.value
      const password = evt.target.password.value
      dispatch(authenticate(username, password, formName))
    }
  }
}

// export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(SignUp)