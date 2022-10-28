import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  const [auth, setAuth] = useState(true)
  const [showLogout, setShowLogout] = useState(false)

  return (
    <div className='header'>
      <div className="container header__container">
        <Link to={'/'} className="header__logo">TEST YOUR UX</Link>
        {auth ?
          <div className="header__btns">
            <Link to='personal' className="header__new-test">NEW TEST</Link>
            <button className="header__help">HELP</button>
            <img onClick={() => setShowLogout(!showLogout)} src={require("../../assets/images/Artist.png")} alt="" className="header__user-img" />
            {showLogout &&
              <div onClick={() => setAuth(!auth)} className="header__logout">Log out</div>
            }
          </div> :
          <div className="header__btns">
            <a href='https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=220526430317-99hs54su7n5cek50rilhdaautuk35grr.apps.googleusercontent.com&redirect_uri=https://dev-testservice.westus3.cloudapp.azure.com:5001/login/callback&scope=openid+email+profile' className="header__try btn">Try for free Now</a>
            <button className="header__login btn" onClick={() => setAuth(!auth)}>Continue with Google</button>
          </div>
        }
      </div>
    </div>
  )
}

export default Header