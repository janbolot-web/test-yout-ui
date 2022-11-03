import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition } from "react-transition-group";

import Comparison from '../../components/Comparison'
import NewTest from '../../components/NewTest'
import OpenImg from '../../components/OpenImg'
import TestCard from '../../components/TestCard'
import Upload from '../../components/Upload'
import Upload2 from '../../components/Upload';
import './PersonalPage.scss'

const PersonalPage = () => {
    const [openImg, setOpenImg] = useState(false)
    const [openCreateModal, setOpenCreateModal] = useState(false)
    const [srcImg, setSrcImg] = useState('')
    const [item, setitem] = useState(null)

    const tests = [
        { id: 0, avatarUrl: "https://images.pexels.com/photos/3349638/pexels-photo-3349638.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", name: "Example1", date: "20.07.2022", percents: ["20", "80"], imageA: "https://images.pexels.com/photos/4151965/pexels-photo-4151965.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", imageB: "https://images.pexels.com/photos/12175850/pexels-photo-12175850.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" }, { id: 1, avatarUrl: "https://images.pexels.com/photos/12175850/pexels-photo-12175850.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", name: "Example2", date: "21.07.2022", percents: ["40", "60"], imageA: "https://images.pexels.com/photos/7060496/pexels-photo-7060496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", imageB: "https://images.pexels.com/photos/3349638/pexels-photo-3349638.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" }, { id: 2, avatarUrl: "https://images.pexels.com/photos/12405196/pexels-photo-12405196.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", name: "Example3", date: "22.07.2022", percents: ["10", "90"], imageA: "https://images.pexels.com/photos/13551935/pexels-photo-13551935.jpeg?cs=srgb&dl=pexels-tiana-13551935.jpg&fm=jpg", imageB: "https://images.pexels.com/photos/12175850/pexels-photo-12175850.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" }
    ]
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
                        {tests.map(test => (
                            <TestCard key={test.id} test={test} setitem={setitem} addActiveClass={item ? item.id : 0} />
                        ))}
                    </div>
                    <div className="personal__bottom">
                        <div className="personal__text">You haven’t created any experiments yet. <br /> Click to start your first experiment!</div>
                        <div className="personal__btn" onClick={() => setOpenCreateModal(true)}>CREATE NEW TEST</div>
                    </div>
                </div>
                <Comparison item={item ? item : tests[0]} setOpenImg={setOpenImg} setSrcImg={setSrcImg} />
                <img className="personal__dot dot-img1" src={require('../../assets/images/Dot-bg.png')} />
                <img className="personal__dot dot-img2" src={require('../../assets/images/Dot-bg.png')} />
                <img className="personal__dot dot-img3" src={require('../../assets/images/Dot-bg.png')} />
            </div>

        </div>
    )
}

export default PersonalPage