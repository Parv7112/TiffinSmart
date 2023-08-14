import React from 'react';

function Active() {
    return (
        <div className='container my-5 mb-5 ms-contain'>
            <div className="row">
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 d-flex flex-column justify-content-center align-items-center mb-3">
                    <img
                        src="/assets/images/subs-plan.jpg"
                        className="as-pic img-fluid"
                        alt="Active Subscription Image"
                    />
                    <div>
                        <p className='fw-bold fs-5 mt-2 my-1 mx-3'>ORDER ID:</p>
                        <p className='fs-5 mt-1'>#8465337872</p>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-md-8 col-lg-8 ms-column1">
                    <div className='row'>
                        <div className='col-8 col-md-8 d-flex flex-column'>
                            <p className='fw-bold mx-3 fs-4 text-danger as-title'>Regular Lunch Tiffin</p>
                            <p className='mx-3 as-content fs-6'>6 Roti, Sabji, Rice, Dal, Salad</p>
                        </div>
                        <div className='col-4 col-md-4 d-flex align-items-center justify-content-center'>
                            <p className='fw-bolder fs-4 mt-2 subs-p'>₹ 2100</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='row'>
                            <div className='col-6 fw-bold fs-6 d-flex flex-column'>
                                <div className='mx-3 my-1'>Start Date:</div>
                            </div>
                            <div className='col-6 fw-bold fs-6'>
                                <div className='mx-3 my-1'>20 April 2023</div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-6 fw-bold fs-6'>
                                <div className='mx-3 my-1'>End Date: </div>
                            </div>
                            <div className='col-6 fw-bold fs-6'>
                                <div className='mx-3 my-1'>27 April 2023 </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6 fw-bold fs-6'>
                                <div className='mx-3 my-1'>Meal Duration</div>
                            </div>
                            <div className='col-6 fw-bold fs-6'>
                                <div className='mx-3 my-1'>1 Week </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6 fw-bold fs-6'>
                                <div className='mx-3 my-1'>Meals Days</div>
                            </div>
                            <div className='col-6 fw-bold fs-6'>
                                <div className='mx-3 my-1'>Full Day Meal </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6 fw-bold fs-6'>
                                <div className='mx-3 my-1'>Time Slot</div>
                            </div>
                            <div className='col-6 fw-bold fs-6'>
                                <div className='mx-3 my-1'>Lunch </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6 fw-bold fs-6'>
                                <div className='mx-3 my-1'>Address Type:</div>
                            </div>
                            <div className='col-6 fw-bold fs-6 mb-2'>
                                <div className='mx-3 my-1 mb-2'>Home</div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Active;
