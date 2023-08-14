import { useState } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const CropProfile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [crop, setCrop] = useState();

  const [profileResult, setProfileResult] = useState();

  const handleProfileImage = (event) => {
    setProfileImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleCropComplete = (crop) => {
    getCroppedImg(crop);
  };

  function getCroppedImg(crop) {
    if (!profileImage) return;

    const image = new Image();
    image.src = profileImage;

    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    const CroppedImage = canvas.toDataURL('image/jpeg');
    setProfileResult(CroppedImage);
    console.log(CroppedImage);
  }

  return (
    <div>
      <div className='container'>
        <div className='row pb-2'>
          <input type="file" accept='image/*' onChange={handleProfileImage} />
        </div>
        {profileImage && (
          <div className='row justify-content-center py-2'>
            <ReactCrop
              crop={crop}
              onChange={setCrop}
              onComplete={handleCropComplete}
              aspect={1}
              circularCrop={true}
            >
            <img  src={profileImage} />
            </ReactCrop>
            <button className='btn btn-secondary w-auto my-2' type='btn' onClick={() => getCroppedImg(crop)}>Done</button>
          </div>
        )}
        {profileResult && (
          <div>
            <img src={profileResult} alt='Cropped Profile' className='img-fluid' />
          </div>
        )}
      </div>
    </div>
  );
};

export default CropProfile;


