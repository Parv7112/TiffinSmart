import React from 'react';



function SendLink() {
  return (
    <div>
    <div className="container my-card-container mt-5">
    <section className="my-4 d-flex justify-content-center align-items-center">
        <div className="card p-5 sendlink">
            <div className="text-center">
                <img className="card-img-top lock" src="/assets/images/lock2.png" alt="CardImage" />
            </div>
            <div className="card-body">
                <div className="form-group ">
                    <label htmlFor="email" className='mb-2 sendtext'>Reset Link sent to your Email/Mobile No. 
                    </label>
                </div>
                <div className="container text-center ">
                    <p className='sendparatext'>Check Your Email to reset your password.</p>
                </div>
                <div className="d-flex justify-content-center mt-4">
                    <button type='button' className="btn sendbutton ">ok, got it</button>
                </div>
                <div className="container text-center mt-2 ">
                    <p className='sendpara'>Haven’t Received link yet? <a className='sendlinkanchor' href='/'>Resend</a></p>
                </div>

            </div>
        </div>
    </section>
</div>
    </div>
  )
}

export default SendLink
