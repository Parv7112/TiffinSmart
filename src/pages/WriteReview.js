import React, { useState } from 'react';
import { GoStarFill, GoStar } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';
import { PostReview } from '../features/slices/writereviewSlice';


const WriteReview = ({ toggleReviewModal, selectedOrderData }) => {

  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);


  const dispatch = useDispatch();
  const loading = useSelector((state) => state.writereview.loading);
  const error = useSelector((state) => state.writereview.error);

  const handlesubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (reviewText.trim() === '' || rating === 0) {
      return;
    }

    const data = {
      product_rating: rating,
      product_review: reviewText,
    };
    dispatch(PostReview(data));

    toggleReviewModal();
  };

  const handleReviewChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleRating = (selectedRating) => {
    setRating(selectedRating);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <GoStarFill key={i} className='pe-1' onClick={() => handleRating(i)} />
        ) : (
          <GoStar key={i} className='pe-1' onClick={() => handleRating(i)} />
        )
      );
    }
    return stars;
  };


  return (
    <div>
      <div className='writereview-container container p-4'>
        <form onSubmit={handlesubmit}>
        {selectedOrderData &&(
          <div className="row">
            <div className='col col-md-auto'>
              <img src={selectedOrderData.product_image} className=' writereview-img' />
            </div>
            <div className='col p-md-5'>
              <p className='writereview-title fw-bolder mb-0 py-1'>{selectedOrderData.Product_name}</p>
              <p className='writereview-items fw-semibold mb-0 py-1'>{selectedOrderData.Product_description}</p>
              <div className='writereview-rating fs-3 border-0 bg-transparent' type='button'>
                {renderStars()}
              </div>
              {formSubmitted && rating === 0 && <p className='text-danger'>Please select a rating before submitting.</p>}
            </div>
          </div>
          )}
          <div className="row">
            <label className="writereview-writereview fw-bolder px-0" >Write a Review</label>
            <textarea className={`writereview-writereview-placeholder border ${formSubmitted && reviewText.trim() === '' ? 'border-danger' : 'border-dark-subtle'
              } shadow p-3 mb-3 bg-body-tertiary`}
              placeholder="Please Write Review" value={reviewText} onChange={handleReviewChange} />
            {formSubmitted && reviewText.trim() === '' && (
              <p className="text-danger">Please provide a review before submitting.</p>
            )}
            <p className='writereview-text-line p-0'>By submitting review you give us consent to publish and process personal<br className='d-none d-md-block' />
              information in accordance with Terms of use and Privacy Policy</p>
          </div>
          <div className="row justify-content-center">
            <button type='submit' className='writereview-submit-btn py-2 px-3 fw-bold border-0 rounded w-auto' >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default WriteReview
