import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showSubscriptionPlan } from '../features/slices/subscriptionPlanSlice';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../utils/Style.css';
import Faq from '../components/Faq';

function SubscriptionDetails() {
    const dispatch = useDispatch();
    const subscriptionPlanData = useSelector((state) => state.subscriptionPlan.data);
    const isLoading = useSelector((state) => state.subscriptionPlan.loading);
    const isError = useSelector((state) => state.subscriptionPlan.error);

    console.log(subscriptionPlanData)
    useEffect(() => {
        dispatch(showSubscriptionPlan());
    }, [dispatch]);

    useEffect(() => {
        // Store data in local storage
        localStorage.setItem('subscriptionPlanData', JSON.stringify(subscriptionPlanData));
    }, [subscriptionPlanData]);

    return (
        <>
            <section>
                <img
                    src="/assets/images/SubscriptionBG.png"
                    className="card-img-top px-4 subs-bg"
                    alt="Subscription Background"
                />
                <div className="container">
                    <header className="text-center pt-5 fw-bold display-5">
                        Subscription Plans
                    </header>
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <p className="text-center fs-5 mt-4 px-5 mx-5 px-md-5 text-wrap">
                                Choose from our flexible subscription plans that cater to your specific needs. Select the number of meals and frequency that works best for you.
                            </p>
                            <div className="container pt-5 py-2 pr-md-4 pr-sm-5">
                                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                                    {isLoading ? (
                                        <div>Loading...</div>
                                    ) : isError ? (
                                        <div>Error occurred while fetching subscription plans.</div>
                                    ) : (
                                        subscriptionPlanData.map((plan) => (
                                            <div className="col-sm-3" key={plan.id}>
                                                <div className="card border-dark subs-card">
                                                    <img src={plan.image} alt="planimage error" />
                                                    <div className="fw-bolder fs-3 text-center">{plan.plan_duration}</div>
                                                    <div className="fw-bold fs-6 text-center">{plan.price}</div>
                                                    <div className="mt-2 mx-5 plan-items">
                                                        <ul className='plan-items mx-3'>
                                                            <li className="">
                                                                {plan.sabji}
                                                            </li>
                                                            <li className="">
                                                                {plan.chapati}
                                                            </li>
                                                            <li className="">
                                                                {plan.dal}
                                                            </li>
                                                            <li className="">
                                                                {plan.rice}
                                                            </li>
                                                            <li className="">
                                                                {plan.salad}
                                                            </li>
                                                            <li className="">
                                                                {plan.pickle}
                                                            </li>
                                                            <li className="">
                                                                {plan.sweet}
                                                            </li>
                                                        </ul>

                                                    </div>
                                                    <div className='mx-5 plan-static'>
                                                        <div className='mx-3'>
                                                            <div className='fw-bolder mt-2 mx-5 fs-4 '>
                                                            OR
                                                        </div>
                                                            </div>

                                                        <div className='mt-1 text-wrap fs-5 mx-5 '>
                                                            Customize Your Plan
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>

                            <header className="text-center py-5 fw-bold display-5">How It Works?</header>
                        </div>
                    </div>

                </div>
                <div className="container subs-container">
                    <div className="row d-flex flex-column flex-md-row justify-content-center align-items-center subs-row13">
                        <div className="col-lg-4 col-md-6">
                            <div className="d-flex align-items-start justify-content-center justify-content-md-start">
                                <div className="mt-5 mx-5">
                                    <img
                                        src="/assets/images/subs1.png"
                                        className="img-fluid subsdetimg1"
                                        alt="Subscription Image1"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-2 mt-5 subs-digit13 ">
                            <div className="py-3 d-flex justify-content-center align-items-center">
                                <p className="bg-danger rounded-circle text-white fw-bolder fs-1 subs-circle d-flex justify-content-center align-items-center ">1</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4 mt-5">
                            <div className="text-left my-5 subs-content">
                                <p className="fs-3 mt-md-0 fw-bold">Choose your subscription plan and customize your meal preferences.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex flex-column flex-md-row justify-content-center align-items-center subs-row24">
                        <div className="col-lg-1 col-md-2 mt-5">
                            <div className="py-3 d-flex justify-content-center align-items-center">
                                <p className="bg-danger rounded-circle text-white fw-bolder fs-1 subs-circle d-flex justify-content-center align-items-center">2</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4 mt-5">
                            <div className="text-left my-5">
                                <p className="fs-3 mt-md-0 fw-bold">Our chefs will prepare your meals with the freshest ingredients and utmost care.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 subs-pic24">
                            <div className="d-flex align-items-start justify-content-center justify-content-md-start">
                                <div className="mt-5 mx-5">
                                    <img
                                        src="/assets/images/subs2.png"
                                        className="img-fluid subsdetimg1"
                                        alt="Subscription Image1"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex flex-column flex-md-row justify-content-center align-items-center subs-row3 subs-row13">
                        <div className="col-lg-4 col-md-6">
                            <div className="d-flex align-items-start justify-content-center justify-content-md-start">
                                <div className="mt-5 mx-5">
                                    <img
                                        src="/assets/images/subs3.png"
                                        className="img-fluid subsdetimg1"
                                        alt="Subscription Image1"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-2 mt-5 subs-digit13 ">
                            <div className="py-3 d-flex justify-content-center align-items-center">
                                <p className="bg-danger rounded-circle text-white fw-bolder fs-1 subs-circle d-flex justify-content-center align-items-center ">3</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4 mt-5">
                            <div className="text-left my-5 subs-content">
                                <p className="fs-3 mt-md-0 fw-bold"> We deliver the meals right to your doorstep at the scheduled time.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex flex-column flex-md-row justify-content-center align-items-center subs-row24 mb-5">
                        <div className="col-lg-1 col-md-2 mt-5">
                            <div className="py-3 d-flex justify-content-center align-items-center">
                                <p className="bg-danger rounded-circle text-white fw-bolder fs-1 subs-circle d-flex justify-content-center align-items-center">4</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4 mt-5">
                            <div className="text-left my-5">
                                <p className="fs-3 mt-md-0 fw-bold">Enjoy delicious and hassle-free meals without any cooking or cleanup.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 subs-pic24">
                            <div className="d-flex align-items-start justify-content-center justify-content-md-start">
                                <div className="mt-5 mx-5">
                                    <img
                                        src="/assets/images/subs4.png"
                                        className="img-fluid subsdetimg1"
                                        alt="Subscription Image1"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Faq/>
            </section>
        </>
    );
}

export default SubscriptionDetails;
