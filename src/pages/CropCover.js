import { useState } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const CropCover = () => {
  const [coverImage, setCoverImage] = useState();
  const [crop, setCrop] = useState();
  const [coverResult, setCoverResult] = useState();

  const handleCoverImage = (event) => {
    setCoverImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleCropComplete = (crop) => {
    getCroppedImg(crop);
  };

  function getCroppedImg(crop) {
    if (!coverImage) return;
  
    const image = new Image();
    image.src = coverImage;
  
    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = crop.width;
      canvas.height = crop.height;
      const ctx = canvas.getContext('2d');
  
      ctx.drawImage(
        image,
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        crop.width,
        crop.height
      );
  
      canvas.toBlob((blob) => {
        setCoverResult(blob);
      }, 'image/jpeg');
    };
  }

  console.log(coverResult);

  return (
    <div>
      <div className='container'>
        <div className='row pb-2'>
          <input type="file" accept='image/*' onChange={handleCoverImage} />
        </div>
        <div className='row'>
          {coverImage && (
            <ReactCrop
              crop={crop}
              aspect={4 / 1}
              onChange={(newCrop) => setCrop(newCrop)}
              onComplete={handleCropComplete}
            >
              <img src={coverImage} alt='Selected' />
            </ReactCrop>
          )}
          <div className='row justify-content-center'>
            <button
              className='btn btn-secondary w-auto'
              type='button'
              onClick={() =>  getCroppedImg(crop)}
            >
              Done
            </button>
          </div>
          {coverResult && (
            <div>
              <img src={URL.createObjectURL(coverResult)} alt='Cropped Profile' className='img-fluid' />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CropCover;
