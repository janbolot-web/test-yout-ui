import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition } from "react-transition-group";
import Alert from '../Alert'
import Upload from '../Upload';
import './Header.scss'

const Header = () => {
  const [auth, setAuth] = useState(false)
  const [authMessage, setAuthMessage] = useState(false)
  const [showLogout, setShowLogout] = useState(false)
  const [openCreateModal, setOpenCreateModal] = useState(false)

  function authLogout() {
    setAuth(false)
    setAuthMessage(false)
  }

  function authLogin() {
    setAuth(true)
    setAuthMessage(true)
  }

  return (
    <div className='header'>
      <CSSTransition in={authMessage} classNames="auth-modal" timeout={500} unmountOnExit>
        <Alert setAuthMessage={setAuthMessage} />
      </CSSTransition>

      <CSSTransition in={openCreateModal} classNames="upload-modal" timeout={500} unmountOnExit>
        <Upload setOpenCreateModal={setOpenCreateModal} />
      </CSSTransition>

      <div className="container header__container">
        <Link to={'/'} className="header__logo">TEST YOUR UX</Link>
        {auth ?
          <div className="header__btns">
            <div className="header__new-test" onClick={() => setOpenCreateModal(true)}>NEW TEST</div>
            <button className="header__help">HELP</button>
            <img onClick={() => setShowLogout(!showLogout)} src={require("../../assets/images/Artist.png")} alt="" className="header__user-img" />
            {showLogout &&
              <div onClick={authLogout} className="header__logout">Log out</div>
            }
          </div> :
          <div className="header__btns">
            <a href='#' className="header__try btn">Try for free Now</a>
            <button className="header__login btn" onClick={authLogin}>Continue with Google</button>
          </div>
        }
      </div>
    </div>
  )
}

export default Header