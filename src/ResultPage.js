import React from "react";
import { Link } from "react-router-dom";

const ResultPage = () => {
  const ansImg1 =
    "https://www.ganeshkunda.com.np/wp-content/themes/archiesoft/img/destinations/india.jpg";
  const ansImg =
    "https://hips.hearstapps.com/hmg-prod/images/lightbulb-moment-royalty-free-image-176565702-1563363264.jpg";

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
            <div className="col-lg-10 col-12 mx-auto h-100">
              <div className="d-flex align-items-center h-100 w-100">
                <div className="quiz_result__block w-100" id="white_theme">
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
                  <div className="row">
                    <div className="col-12">
                      <div className="quiz_wrap__content text-center">
                        <div className="quiz_wrap__content___text">
                          <p>
                            This certificate is proudly presented on completion
                            of the quiz
                          </p>
                          <div className="quiz_wrap__content__img my-4">
                            <img
                              className="img-fluid"
                              src="https://hotelmudita.com.np/wp-content/uploads/2022/07/electricity-chitwan.jpg"
                              alt=""
                            />
                          </div>
                          <h3>HOW EFFECTIVE IS YOUR INSTAGRAM STRATEGY?</h3>
                          <div className="my-3">
                            <h4>To</h4>
                          </div>
                          <div className="mb-3">
                            <h2>TEST</h2>
                          </div>
                          <h4>80%</h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="quiz_wrap__btn mb-4">
                            <Link to="/quizTransparent">
                              <div className="quiz_ans__btn">
                                <button type="button" className="p-0 mx-auto">
                                  HOW EFFECTIVE IS YOUR INSTAGRAM STRATEGY?
                                </button>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="quiz_wrap__btn mb-4">
                            <Link to="/quizTransparent">
                              <div className="quiz_ans__btn">
                                <button type="button" className="p-0 mx-auto">
                                  HOW EFFECTIVE IS YOUR INSTAGRAM STRATEGY?
                                </button>
                              </div>
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

export default ResultPage;
