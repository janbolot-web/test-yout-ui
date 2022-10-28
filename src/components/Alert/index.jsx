import React from 'react'
import { Link } from 'react-router-dom'
import './Alert.scss'

const Alert = () => {
  return (
    <div className='alert'>
      <div className="alert__container">
        <div className="alert__title">Any text after user registration</div>
        <Link className='alert__btn' to={'personal'}> <span>I'm going to try </span>
          <img src={require("../../assets/images/icons/arrow-right.png")} alt="" />
        </Link>
      </div>
    </div>
  )
}

export default Alert