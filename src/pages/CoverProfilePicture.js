import {  useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import CropCover  from './CropCover';
import CropProfile from './CropProfile';

const CoverProfilePicture = ({ isSidebarOpen, setCurrentComponent, currentComponent}) => {


  const [CropCoverModalOpen, setCropCoverModalOpen] = useState(false);
  const [CropProfileModalOpen, setCropProfileModalOpen] = useState(false);

  const ShowEditButton = currentComponent==="profile";
  const ShowChangeButton = currentComponent==="editProfile";

  const toggleCropCoverModal = () => {
     setCropCoverModalOpen(prevState => !prevState);
  };

  const toggleCropProfileModal = () => {
    setCropProfileModalOpen(prevState => !prevState);
  };

  const handleEditProfileClick = () => {
    setCurrentComponent('editProfile');
  };


  return (
    <div>
      <div className='position-relative col-sm-12'>

        <img src="/assets/images/Accountdetailsimg.png" alt='coverimg' className="position-absolute z-0 adcoverimg" />


        <img src='/assets/images/testoimg.png' alt='circleimg' className={isSidebarOpen ? 'adsmallprofilepicture position-relative z-1 ' : 'adprofilepicture position-relative z-1 ms-md-5'} />
        
        {ShowChangeButton && 
        <button className={isSidebarOpen ? 'fw-sd-samibold fw-bold border-0 bg-transparent adsmallchangephototext position-relative d-block' : 'border-0 bg-transparent fw-bolder adchangephototext position-relative d-block'} type='button' onClick={toggleCropProfileModal}>Change Photo</button>
        }

      <div className='row w-100 position-absolute d-inline'>
        
        {ShowEditButton && 
        <button className={isSidebarOpen ? 'col adsmalleditprofiletext fw-sd-samibold fw-bold d-flex' : 'col adeditprofiletext fw-bolder d-flex'} onClick={handleEditProfileClick} type='button'>Edit Profile</button>
        }

        {ShowChangeButton &&
        <button className={isSidebarOpen ? 'col fw-bolder border-0 bg-transparent adsmallchangecovertext d-flex flex-row-reverse pe-0' : 'col border-0 bg-transparent fw-bolder fs-md-5 adchangecovertext d-flex flex-row-reverse pe-0'} type='button' onClick={toggleCropCoverModal}>Cover Change</button>
        } 

        <div>
        </div>
      </div>
      </div>

      <Modal isOpen={CropCoverModalOpen} toggle={toggleCropCoverModal} style={{ maxWidth: '680px' }} className=" rounded-0">
            <ModalBody className="pt-0">
               <ModalHeader toggle={toggleCropCoverModal} className="border-0 pb-0" />
               <CropCover toggleCropCoverModal={toggleCropCoverModal} />
            </ModalBody>
      </Modal>

      <Modal isOpen={CropProfileModalOpen} toggle={toggleCropProfileModal} style={{ maxWidth: '680px' }} className=" rounded-0">
            <ModalBody className="pt-0">
               <ModalHeader toggle={toggleCropProfileModal} className="border-0 pb-0" />
               <CropProfile toggleCropProfileModal={toggleCropProfileModal} />
            </ModalBody>
      </Modal>


    </div>
  )
}

export default CoverProfilePicture

