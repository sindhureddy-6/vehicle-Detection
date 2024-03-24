import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DotLoader from "react-spinners/DotLoader";
import '../styles/form.css'

function form() {
  const [file, setFile] = useState(null);
  const [imagePath, setImagePath] = useState('');
  const [uploadedImagePath, setUploadedImagePath] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
   const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
`;
  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
    const uploadedImageURL = URL.createObjectURL(uploadedFile);
    setUploadedImagePath(uploadedImageURL); 
  };

    const handleSubmit = async (event) => {
      event.preventDefault();

      const formData = new FormData();
      formData.append('file', file);
      try {
        setIsLoading(true);
        const response = await axios.post('http://127.0.0.1:5000/predict_img', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          responseType: 'arraybuffer'
        });
        const blob = new Blob([response.data], { type: 'image/jpeg' });
        const imageUrl = URL.createObjectURL(blob);
        setImagePath(imageUrl);
      
      } catch (error) {
        console.error('Error uploading file: ', error);
      }
      finally {
        setIsLoading(false);
        }
    };
  useEffect(() => {
    if (!isLoading) {
      setFile(null);
    }
  }, [isLoading]);

  return (
      <div className="container">
            <div className="box">
                <form className="form-signin" onSubmit={handleSubmit}>
                    <h1 className="form-title">Upload any image</h1>
                    <input type="file" name="file" className="form-control-file" id="inputfile" onChange={handleFileChange}/>
                    <br />
                <button className="upload-btn" type="submit">Upload</button>
         
                </form>
            </div>
      <br />
      <div className='images'>
        <div className='uploaded'>
        {uploadedImagePath && (
            <div>
              
             <h2>Uploaded Image</h2>
             <img id="img" src={uploadedImagePath} alt={`Uploaded`} />
        </div>
         )}
        </div>
         <div className='loader'>{isLoading && <DotLoader color={'#000000'} loading={isLoading} css={override} size={50} />}</div>
        <div className='detected'>
      {imagePath && (
                <div>
                  <h2>Detected Image</h2>
                  <img id="img" src={imagePath} alt={`Uploaded`} />
                </div>
        )}
        </div>
      </div>
      </div>
  );
}

export default form;
