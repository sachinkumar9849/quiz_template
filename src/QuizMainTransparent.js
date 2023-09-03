import React from "react";
import { Link } from "react-router-dom";
import im1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";

const QuizMain = () => {
  // Define the background image URL
  const backgroundImageUrl =
    'url("https://res.cloudinary.com/quizzes4leads/image/upload/v1595223890/quizzes4leads/ckhxypy6bgiw8ppydlyo.jpg")';

  return (
    <>
      {/* Quiz section with background image */}
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
                <div className="quiz_wrap-block w-100" id="transparent_theme">
                  {/* Quiz header */}
                  <div className="row">
                    <div className="col-12">
                      <div className="quiz_wrap__header d-flex align-items-center">
                        <div className="header_title">
                          <h4>
                            Ultimate Quiz for people if traveling is your dream!
                          </h4>
                        </div>
                        <div className="header_logo">
                          <img
                            className="img-fluid"
                            src="https://www.quizzes4leads.com/wp-content/themes/quizzes4leads/assets/images/logo.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Quiz content */}
                  <div className="quiz_wrap__content text-center">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="quiz_wrap__content___text">
                          <p>
                            Covid-19 has literally changed the world as we know
                            it.
                          </p>
                          {/* Quiz image */}
                          <div className="quiz_wrap__content__img my-4">
                            <img className="img-fluid" src={im1} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* quiz question end  */}
                    <div className="row">
                      <div className="col-lg-8 mx-auto">
                        <div className="row">
                          {/* Quiz options */}
                          <div className="col-lg-6">
                            <div className="quiz_wrap__btn mb-4">
                              <Link to="/loginForm">
                                <div className="quiz_ans__btn">
                                  <button type="button" className="p-0 mx-auto">
                                    <img
                                      className="quiz_ans__img img-fluid"
                                      src={img3}
                                      alt=""
                                    />
                                    <div className="quiz_btn__ans__text p-3">
                                      <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                      </p>
                                    </div>
                                  </button>
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="quiz_wrap__btn mb-4">
                              <Link to="/loginForm">
                                <div className="quiz_ans__btn">
                                  <button type="button" className="p-0 mx-auto">
                                    <img
                                      className="quiz_ans__img img-fluid"
                                      src={img3}
                                      alt=""
                                    />
                                    <div className="quiz_btn__ans__text p-3">
                                      <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                      </p>
                                    </div>
                                  </button>
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="quiz_wrap__btn mb-4">
                              <Link to="/loginForm">
                                <div className="quiz_ans__btn">
                                  <button type="button" className="p-0 mx-auto">
                                    {/* <img
                                      className="quiz_ans__img img-fluid"
                                      src={img3}
                                      alt=""
                                    /> */}
                                    <div className="quiz_btn__ans__text p-3">
                                      <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                      </p>
                                    </div>
                                  </button>
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="quiz_wrap__btn mb-4">
                              <Link to="/loginForm">
                                <div className="quiz_ans__btn">
                                  <button type="button" className="p-0 mx-auto">
                                    {/* <img
                                      className="quiz_ans__img img-fluid"
                                      src={img3}
                                      alt=""
                                    /> */}
                                    <div className="quiz_btn__ans__text p-3">
                                      <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                      </p>
                                    </div>
                                  </button>
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="quiz_wrap__btn mb-4">
                              <Link to="/loginForm">
                                <div className="quiz_ans__btn">
                                  <button type="button" className="p-0 mx-auto">
                                    {/* <img
                                      className="quiz_ans__img img-fluid"
                                      src={img3}
                                      alt=""
                                    /> */}
                                    <div className="quiz_btn__ans__text p-3">
                                      <p>Yes</p>
                                    </div>
                                  </button>
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="quiz_wrap__btn mb-4">
                              <Link to="/loginForm">
                                <div className="quiz_ans__btn">
                                  <button type="button" className="p-0 mx-auto">
                                    {/* <img
                                      className="quiz_ans__img img-fluid"
                                      src={img3}
                                      alt=""
                                    /> */}
                                    <div className="quiz_btn__ans__text p-3">
                                      <p>No</p>
                                    </div>
                                  </button>
                                </div>
                              </Link>
                            </div>
                          </div>
                          {/* Repeat this block for other options */}
                          {/* ... */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Quiz footer */}
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
