import React, { useState } from 'react'
import './Upload.scss'

const Upload = ({ setOpenCreateModal }) => {
  const [drag, setDrag] = useState(false)
  const [dragSecond, setDragSecond] = useState(false)
  const [file, setFile] = useState([])
  const [fileSecond, setFileSecond] = useState([])

  const dragStartHandler = (e) => {
    e.preventDefault()
    setDrag(true)
  }
  const dragLeaveHandler = (e) => {
    e.preventDefault()
    setDrag(false)
  }
  const dragStartHandlerSecond = (e) => {
    e.preventDefault()
    setDragSecond(true)
  }
  const dragLeaveHandlerSecond = (e) => {
    e.preventDefault()
    setDragSecond(false)
  }
  const onDropHandler = (e) => {
    e.preventDefault()
    let file = [...e.dataTransfer.files]
    if ((file[0].type === "image/jpeg" || file[0].type === "image/png") && file[0].size <= 15000000) {
      setFile(file[0])
      setDrag(false)
      console.log(file[0].size);
    } else {
      return
    }
    // const formData = new FormData()
    // formData.append('file', files[0])
    // console.log(formData);
  }
  const onDropHandlerSecond = (e) => {
    e.preventDefault()
    let file = [...e.dataTransfer.files]
    setFileSecond(file[0])
    console.log([...e.dataTransfer.items]);
    setDragSecond(false)
  }

  function closeModal() {
    setOpenCreateModal(false)
  }

  return (
    <div className='upload'>
      <div className="upload__container">
        <div className="upload__close" onClick={closeModal}></div>
        <div className="upload__header">
          <div className="upload__title">
            <span>Experiment title</span>
            <p>20.07.2022</p>
          </div>
          <div className="upload__btn">RUN TEST</div>
        </div>
        <div className="upload__img-list">
          <div className="upload__img-item">
            {drag ?
              <div className='upload__img-drop  drop-hover'
                onDragStart={e => dragStartHandler(e)}
                onDragLeave={e => dragLeaveHandler(e)}
                onDragOver={e => dragStartHandler(e)}
                onDrop={e => onDropHandler(e)}
              >
                Upload image</div>
              :
              <div className='upload__img-drop'
                onDragStart={e => dragStartHandler(e)}
                onDragLeave={e => dragLeaveHandler(e)}
                onDragOver={e => dragStartHandler(e)}
              >Upload image</div>

            }
            <p className="clip">{file && file.name}</p>
          </div>
          <div className="upload__img-item">
            {dragSecond ?
              <div className='upload__img-drop drop-hover'
                onDragStart={e => dragStartHandlerSecond(e)}
                onDragLeave={e => dragLeaveHandlerSecond(e)}
                onDragOver={e => dragStartHandlerSecond(e)}
                onDrop={e => onDropHandlerSecond(e)}
              >Upload image</div>
              :
              <div className='upload__img-drop'
                onDragStart={e => dragStartHandlerSecond(e)}
                onDragLeave={e => dragLeaveHandlerSecond(e)}
                onDragOver={e => dragStartHandlerSecond(e)}
              >Upload image</div>
            }
            <p className="clip">{fileSecond && fileSecond.name}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Upload