import React, { useEffect, useState } from "react";
import DragAndDrop from "./DragAndDrop";
import './Upload.scss'

function Upload({ setOpenCreateModal }) {
  
  function closeModal() {
    setOpenCreateModal(false)
  }
 
  return (
    <section className="upload">
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
          <DragAndDrop   />
          <DragAndDrop   />
        </div>
      </div>
    </section>
  );
}

export default Upload;
