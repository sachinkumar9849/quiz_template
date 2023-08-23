import React from "react";
import { Link } from "react-router-dom";
import im1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'

const QuizMain = () => {
 
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
                      <div className="quiz_wrap__content__img my-4">
                        <img
                          className="img-fluid"
                          src={im1}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-8 mx-auto">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="quiz_wrap__btn mb-4">
                            <Link to="/quizTransparent">
                              <button
                                type="button"
                                className="p-0 quiz_ans__btn mx-auto"
                              >
                                <img
                                  className="quiz_ans__img img-fluid"
                                  src={img2}
                                  alt=""
                                />
                                <div className="quiz_btn__ans__text p-3">
                                  <p>
                                    Need some help building your quiz? Don't
                                    worry our awesome team is just an email
                                    away, write to us at
                                    contact@quizzes4leads.com.
                                  </p>
                                </div>
                              </button>
                            </Link>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="quiz_wrap__btn mb-4">
                            <Link to="/quizTransparent">
                              <button
                                type="button"
                                className="p-0 quiz_ans__btn mx-auto"
                              >
                                <img
                                  className="quiz_ans__img img-fluid"
                                  src={img3}
                                  alt=""
                                />
                                <div className="quiz_btn__ans__text p-3">
                                  <p>
                                    Need some help building your quiz? Don't
                                    worry our awesome team is just an email
                                    away, write to us at
                                    contact@quizzes4leads.com.
                                  </p>
                                </div>
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="quiz_wrap__btn mb-4">
                            <Link to="/quizTransparent">
                              <button
                                type="button"
                                className="p-0 quiz_ans__btn mx-auto"
                              >
                                {/* <img
                                  className="quiz_ans__img img-fluid"
                                 src={ansImg}
                                  alt=""
                                /> */}
                                <div className="quiz_btn__ans__text p-3">
                                  <p>
                                    Need some help building your quiz? Don't
                                    worry our awesome team is just an email
                                    away, write to us at
                                    contact@quizzes4leads.com.
                                  </p>
                                </div>
                              </button>
                            </Link>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="quiz_wrap__btn mb-4">
                            <Link to="/quizTransparent">
                              <button
                                type="button"
                                className="p-0 quiz_ans__btn mx-auto"
                              >
                                {/* <img
                                  className="quiz_ans__img img-fluid"
                                  src={ansImg1}
                                  alt=""
                                /> */}
                                <div className="quiz_btn__ans__text p-3">
                                  <p>
                                    Need some help building your quiz? Don't
                                    worry our awesome team is just an email
                                    away, write to us at
                                    contact@quizzes4leads.com.
                                  </p>
                                </div>
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="quiz_wrap__btn mb-4">
                            <Link to="/quizTransparent">
                              <button
                                type="button"
                                className="p-0 quiz_ans__btn mx-auto w-100"
                              >
                                {/* <img
                                  className="quiz_ans__img img-fluid"
                                 src={ansImg}
                                  alt=""
                                /> */}
                                <div className="quiz_btn__ans__text p-3">
                                  <p>Yes</p>
                                </div>
                              </button>
                            </Link>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="quiz_wrap__btn mb-4">
                            <Link to="/quizTransparent">
                              <button
                                type="button"
                                className="p-0 quiz_ans__btn mx-auto w-100"
                              >
                                {/* <img
                                  className="quiz_ans__img img-fluid"
                                  src={ansImg1}
                                  alt=""
                                /> */}
                                <div className="quiz_btn__ans__text p-3">
                                  <p>No</p>
                                </div>
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="quiz_wrap__btn mb-4">
                            <Link to="/quizTransparent">
                              <button
                                type="button"
                                className="p-0 quiz_ans__btn mx-auto w-100"
                              >
                                {/* <img
                                  className="quiz_ans__img img-fluid"
                                 src={ansImg}
                                  alt=""
                                /> */}
                                <div className="quiz_btn__ans__text p-3">
                                  <p>Yes</p>
                                </div>
                              </button>
                            </Link>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="quiz_wrap__btn mb-4">
                            <Link to="/quizTransparent">
                              <button
                                type="button"
                                className="p-0 quiz_ans__btn mx-auto w-100"
                              >
                                {/* <img
                                  className="quiz_ans__img img-fluid"
                                  src={ansImg1}
                                  alt=""
                                /> */}
                                <div className="quiz_btn__ans__text p-3">
                                  <p>No</p>
                                </div>
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
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

export default QuizMain;
