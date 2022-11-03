import React from 'react'
import OpenImg from '../OpenImg'
import './Comparison.scss'

const Comparison = ({ setOpenImg, setSrcImg, item }) => {
    function openImgHandler(e) {
        setOpenImg(true)
        setSrcImg(e.target.src)
        document.querySelector('body').classList.add('lock')
    }
    return (
        <div className='comparison'>
            <div className="comparison__container">
                <div className="comparison__title">
                    <span>{item.name} &nbsp; &nbsp;</span>
                    {item.date}
                </div>
                <div className="comparison__top">
                    <div className='comparison__img' >
                        <img onClick={(e) => openImgHandler(e)} src={item.imageA} alt="" />
                    </div>
                    <div className='comparison__img winner' >
                        <img onClick={(e) => openImgHandler(e)} src={item.imageB} alt="" />
                    </div>
                </div>
                <div className="comparison__bottom">
                    <div className="comparison__result ">
                        <img src={require("../../assets/images/icons/dislike.png")} className='comparison__like' alt="" />
                        <span>{item.percents && item.percents[0]}%</span>
                    </div>

                    <img className='comparison__arrow' src={require("../../assets/images/icons/arrow-left.png")} alt="" />
                    <div className="comparison__result">
                        <img src={require("../../assets/images/icons/like.png")} className='comparison__dislike' alt="" />
                        <span>{item.percents && item.percents[1]}%</span>
                    </div>
                </div>
                <div className="comparison__bottom-text">
                    <span>Experiment result: </span>
                    Option 2 is significantly better
                </div>
                {/* <div className="comparison__progress">
                    <img src={require('../../assets/images/icons/progress.png')} alt="" />
                    <span>Voting in progress 60%</span>
                    <p>less than 5 min left</p>
                </div> */}
            </div>
        </div >
    )
}

export default Comparison