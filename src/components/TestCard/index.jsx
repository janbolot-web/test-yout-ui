import React from 'react'
import './TestCard.scss'

const TestCard = ({addActiveClass}) => {
    return (
        <div className='test'>
            <div className="test__header">
                <div className="test__avatar" >1</div>
                <div className="test__text">
                    <div className="test__name">Example 1</div>
                    <div className="test__date">20.07.2022</div>
                </div>
            </div>
            <div className="test__result">
                <div className="test__item item-active">
                    <span>80%</span>
                    <img src={require('../../assets/images/comparison2.png')} alt="" className="test__img" />
                </div>
                <div className="test__item">
                    <span>20%</span>
                    <img src={require('../../assets/images/comparison.png')} alt="" className="test__img" />
                </div>
            </div>
        </div>
    )
}

export default TestCard