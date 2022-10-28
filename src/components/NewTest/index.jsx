import React from 'react'

const NewTest = () => {
    return (
        <div className='new'>
            <div className="new__container">
                <div className="new__header">
                    <div className="new__title">
                        <span>Experiment title</span>
                        <p>20.07.2022</p>
                    </div>

                    <div className="new__button">RUN TEST</div>
                </div>
                <div className="new__images">
                    <div className="new__first-image">
                        <img src="" alt="" className="image" />
                        <div className="new__name"></div>
                    </div>
                    <div className="new__second-image">
                        <img src="" alt="" className="image" />
                        <div className="new__name"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewTest