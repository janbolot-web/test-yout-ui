import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'
import './HomePage.scss'

const Homepage = () => {
    return (
        <div className='home'>
            <div className="container home__container">
                <div className="home__content">
                    <div className="home__notification">
                        <span>NEW!</span>
                        Super rare design recommendation from us!
                    </div>
                    <h1 className="home__title">Select a better option</h1>
                    <div className="bg-dot-img"></div>
                    <div className="bg-main-img"></div>
                    <p className="home__desc">Test your designs on real people: fast and cheap</p>
                    <Link to='/personal' className="home__btn btn">Try for free Now</Link>
                </div>
                <div className='home__right'>
                    <div className="home__right-container">
                        <div className="home__right-top">
                            <img className='home__right-first-img' src={require("../../assets/images/comparison.png")} alt="" />
                            <img className='home__right-arrow' src={require("../../assets/images/icons/arrow-left.png")} alt="" />
                            <img className='home__right-second-img' src={require("../../assets/images/comparison2.png")} alt="" />
                        </div>
                        <div className="home__right-bottom">
                            <div className="home__right-result ">
                                <img src={require("../../assets/images/icons/dislike.png")} className='home__right-like' alt="" />
                                <span>30%</span>
                            </div>
                            <div className="home__right-result">
                                <img src={require("../../assets/images/icons/like.png")} className='home__right-dislike' alt="" />
                                <span>70%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <About />
        </div>
    )
}

export default Homepage