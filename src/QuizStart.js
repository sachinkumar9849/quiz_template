import React from "react";
import { Link } from "react-router-dom";

const QuizStart = () => {
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
                  <div className="quiz_wrap__content text-center">
                    <div className="quiz_wrap__content___text">
                      <p>
                        Covid-19 has literally changed the world as we know it.
                        As we are locked up in the safe confines of our homes,
                        awaiting a brighter future, let us take a fun quiz to
                        access how well you know the famous cities of the world.
                      </p>
                    </div>
                    <div className="quiz_wrap__btn mb-4">
                      <Link to="/quizmain">
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

export default QuizStart;
