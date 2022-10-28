import React from 'react'
import OpenImg from '../OpenImg'
import './Comparison.scss'

const Comparison = ({ setOpenImg, setSrcImg }) => {
    function openImgHandler(e) {
        setOpenImg(true)
        setSrcImg(e.target.src)
        document.querySelector('body').classList.add('lock')
    }
    return (
        <div className='comparison'>
            <div className="comparison__container">
                <div className="comparison__title">
                    <span>Example 2 &nbsp; &nbsp;</span>
                    20.07.2022
                </div>
                <div className="comparison__top">
                    <div className='comparison__img' >
                        <img onClick={(e) => openImgHandler(e)} src={require("../../assets/images/comparison.png")} alt="" />
                    </div>
                    <div className='comparison__img winner' >
                        <img onClick={(e) => openImgHandler(e)} src={require("../../assets/images/comparison2.png")} alt="" />
                    </div>
                </div>
                {/* <div className="comparison__bottom">
                    <div className="comparison__result ">
                        <img src={require("../../assets/images/icons/dislike.png")} className='comparison__like' alt="" />
                        <span>30%</span>
                    </div>

                    <img className='comparison__arrow' src={require("../../assets/images/icons/arrow-left.png")} alt="" />
                    <div className="comparison__result">
                        <img src={require("../../assets/images/icons/like.png")} className='comparison__dislike' alt="" />
                        <span>70%</span>
                    </div>
                </div>
                <div className="comparison__bottom-text">
                    <span>Experiment result: </span>
                    Option 2 is significantly better
                </div> */}
                <div className="comparison__progress">
                    <img src={require('../../assets/images/icons/progress.png')} alt="" />
                    <span>Voting in progress 60%</span>
                    <p>less than 5 min left</p>
                </div>
            </div>
        </div >
    )
}

export default Comparison