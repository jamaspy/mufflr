import React, { Component } from "react"
import { Link } from 'gatsby'
import '../styles/signin.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook} from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import { faGhost} from '@fortawesome/free-solid-svg-icons'


class SignIn extends Component{
    state ={
        className: "container"
    };

    moveLeft = () => {
        this.setState({
            className: "container right-panel-active"
        })
    };
    moveRight = () => {
        this.setState({
            className: "container"
        })
    };

render(){
   
    return(
      <div class="display">
        <div class={this.state.className} id="container">
        <div class="form-container sign-up-container">
            <form action="#">
                <h1>Create Account</h1>
                <div class="social-container">
                    <a href="/shop/" class="social"><FontAwesomeIcon icon={faAddressBook} /></a>
                    <a href="/shop/" class="social"><FontAwesomeIcon icon={faPaperPlane} /></a>
                    <a href="/shop/" class="social"><FontAwesomeIcon icon={faGhost} /></a>
                </div>
                <span>or use your email for registration</span>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button class="signUpButton">Sign Up</button>
            </form>
        </div>
        <div class="form-container sign-in-container">
            <form action="#">
                <h1>Sign in</h1>
                <div class="social-container">
                    <a href="/shop/" class="social"><FontAwesomeIcon icon={faAddressBook} /></a>
                    <a href="/shop/" class="social"><FontAwesomeIcon icon={faPaperPlane} /></a>
                    <a href="/shop/" class="social"><FontAwesomeIcon icon={faGhost} /></a>
                </div>
                <span>or use your account</span>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <a href="/shop/">Forgot your password?</a>
                <button class="signInButton">
                    <Link to="/home/">
                        Sign In
                    </Link>
                </button>
            </form>
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>Sign in to access Members Only prices and FREE Delviery.</p>
                    <button class="ghost" onClick={this.moveRight}id="signIn">Sign In</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p>Sign up today to 20% off your first order and FREE shipping.</p>
                    <button class="ghost" onClick={this.moveLeft} id="signUp">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
    </div>  
    
)

    }
}
export default SignIn
