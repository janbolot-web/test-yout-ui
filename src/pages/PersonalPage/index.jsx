import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition } from "react-transition-group";

import Comparison from '../../components/Comparison'
import NewTest from '../../components/NewTest'
import OpenImg from '../../components/OpenImg'
import TestCard from '../../components/TestCard'
import Upload from '../../components/Upload'
import './PersonalPage.scss'

const PersonalPage = () => {
    const [openImg, setOpenImg] = useState(false)
    const [openCreateModal, setOpenCreateModal] = useState(false)
    const [srcImg, setSrcImg] = useState('')

    return (
        <div className='personal'>
            <CSSTransition in={openImg} classNames="img-modal" timeout={300} unmountOnExit>
                <OpenImg setOpenImg={setOpenImg} srcImg={srcImg} />
            </CSSTransition>

            <CSSTransition in={openCreateModal} classNames="upload-modal" timeout={500} unmountOnExit>
                <Upload setOpenCreateModal={setOpenCreateModal} />
            </CSSTransition>
            {/* <Upload / */}
            <div className="container personal__container">
                <div className="personal__top">
                    <div className="personal__tests">
                        {[1, 2, 3, 4].map(item => (
                            <TestCard key={item} />
                        ))}
                    </div>
                    <div className="personal__bottom">
                        <div className="personal__text">You haven’t created any experiments yet. <br /> Click to start your first experiment!</div>
                        <div className="personal__btn" onClick={() => setOpenCreateModal(true)}>CREATE NEW TEST</div>
                    </div>
                </div>
                <Comparison setOpenImg={setOpenImg} setSrcImg={setSrcImg} />
                <img className="personal__dot dot-img1" src={require('../../assets/images/Dot-bg.png')} />
                <img className="personal__dot dot-img2" src={require('../../assets/images/Dot-bg.png')} />
                <img className="personal__dot dot-img3" src={require('../../assets/images/Dot-bg.png')} />
            </div>

        </div>
    )
}

export default PersonalPage