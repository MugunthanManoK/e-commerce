import React from 'react'
import { Link } from 'react-router-dom'
function ForgetPage() {
  return (
    <div>
        <div className='forget'>
            <form action="">
                <h3>Forgot your password</h3>
                <p>Please enter the email address you'd like your password reset information sent to </p>
                <label htmlFor="">Enter email address</label>
                <input type="email" placeholder='example123@gmail.com'/>
                <button>Request reset link</button>
                <Link to='/'>Back To Login</Link>
            </form>

        </div>
    </div>
  )
}

export default ForgetPage