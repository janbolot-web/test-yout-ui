import React from 'react'
import './TestCard.scss'

const TestCard = ({ addActiveClass, test, setitem }) => {
    return (
        <div className={addActiveClass == test.id ? 'addActiveClass test' : 'test'} onClick={() => setitem(test)}>
            <div className="test__header">
                <img className="test__avatar" src={test.avatarUrl} />
                <div className="test__text">
                    <div className="test__name">{test.name}</div>
                    <div className="test__date">{test.date}</div>
                </div>
            </div>
            <div className="test__result">
                <div className="test__item item-active">
                    <span>{test.percents[0]}%</span>
                    <img src={test.imageA} alt="" className="test__img" />
                </div>
                <div className="test__item">
                    <span>{test.percents[1]}%</span>
                    <img src={test.imageB} alt="" className="test__img" />
                </div>
            </div>
        </div>
    )
}

export default TestCard