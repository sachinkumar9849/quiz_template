// import React from 'react'

// const LoginForm = () => {
//   return (
//     <div>LoginForm</div>
//   )
// }

// export default LoginForm

import React from "react";
import { Link } from "react-router-dom";
import im1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";

const LoginForm = () => {
  const backgroundImageUrl =
    'url("https://res.cloudinary.com/quizzes4leads/image/upload/v1595223890/quizzes4leads/ckhxypy6bgiw8ppydlyo.jpg")';
  return (
    <>
      <section
        className="quiz_section"
        style={{
          backgroundImage: backgroundImageUrl,
        }}
      >
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-10 mx-auto h-100">
              <div className="d-flex align-items-center h-100 w-100">
                <div className="quiz_wrap-block w-100">
                  <div className="quiz_wrap__header">
                    <h4>
                      Ultimate Quiz for people if traveling is your dream!
                    </h4>
                  </div>
                  <div className="quiz_wrap__content text-center">
                    <div className="quiz_wrap__content___text">
                      <p>
                        Covid-19 has literally changed the world as we know it.
                      </p>
                    </div>
                    <div className="col-lg-8 col-12 mx-auto">
                      <div className="quiz_login__form mt-4">
                        <input
                          type="text"
                          className="form-control mb-3"
                          id="firstName"
                          placeholder="Enter Your  Name"
                        />
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          placeholder="Enter Your Email"
                        />
                      </div>
                    </div>

                    <div className="quiz_wrap__btn mb-4">
                      <Link to="/resultPage">
                        <div className="start_btn quiz_ans__btn mt-5">
                          <button type="button" className="p-0 mx-auto">
                            <div className="quiz_btn__ans__text p-3">
                              <p>Continue</p>
                            </div>
                          </button>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="quiz_wrap__footer"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
