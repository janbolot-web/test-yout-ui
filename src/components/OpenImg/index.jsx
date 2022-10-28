import React from 'react'
import './OpenImg.scss'

const OpenImg = ({ setOpenImg, srcImg }) => {
    function openHandler() {
        setOpenImg(false)
        document.querySelector('body').classList.remove('lock')
    }
    return (
        <div className='image'>
            <div className="image__container">
                <div className="image__close" onClick={openHandler} />
                <img src={srcImg} alt="" className="image__src" />
                <div className="image__name">1234image.png</div>
            </div>
        </div>
    )
}

export default OpenImg