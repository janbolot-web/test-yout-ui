import React, { useEffect, useState } from 'react'
import { useDropzone } from "react-dropzone";
import './Upload.scss'
import CancelIcon from '../../assets/images/icons/close.svg'

const DragAndDrop = ({ }) => {
    const [files, setFiles] = useState();
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            "image/png": ['.png'],
            "image/jpeg": ['.jpeg'],
        },
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                )
            );
        },
    });

    const thumbs =
        files &&
        files.map((file) => (
            <div className="dnd__container" key={file.name}>
                <img
                    src={file.preview}
                    className="dnd__img"
                    onLoad={() => {
                        URL.revokeObjectURL(file.preview);
                    }}
                />
                <span>{file.name}</span>
            </div>
        ));
    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () =>
            files && files.forEach((file) => URL.revokeObjectURL(file.preview));
    }, []);
    return (
        <div className="upload__img-item">
            {files &&
                <img src={CancelIcon} className="upload__remove" onClick={() => setFiles()} />
            }
            {thumbs ? (
                <div className="img">{thumbs}</div>
            ) : (
                <div {...getRootProps({ className: "upload__img-drop" })}>
                    <input {...getInputProps()} />
                    <p>Upload Image</p>
                </div>
            )}
        </div>
    )
}

export default DragAndDrop