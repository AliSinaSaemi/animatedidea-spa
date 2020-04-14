import React from "react";
import header_image from "./../images/landing/svg/v3-header.svg";
export default function Banner() {
  return (
    <React.Fragment>
      <section id="intro-wrap" class="intro-three-Wrap  text-left text-white">
        <div class="container">
          <div class="row">
            <div class="col-md-6 intro-three-LeftSection pb-5">
              <h1 class=" font-weight-bold text-white text-42 mb-3 t-shadow">
                Live Your life with Passion and Dreams{" "}
              </h1>
              <p class=" text-20 mb-4">
                Meet Dexam Highly customizable Angular 8 + Bootstrap 4 Landing
                Pages.{" "}
              </p>
              <div class=" mb-5 ">
                <ul class="list-inline">
                  <li class=" mb-3 ">
                    <i class="eva eva-checkmark-outline mr-2 text-warning"></i>
                    Minimal, Intuitive and Fully Responsive Design
                  </li>

                  <li class="mb-3">
                    <i class="eva eva-checkmark-outline mr-2 text-warning"></i>
                    Super Flexible And Customizable
                  </li>
                </ul>
              </div>
              <div class="intro-three-Buttons">
                <a
                  name=""
                  id=""
                  href="/sessions/signin"
                  class="btn half-button btn-outline-white btn-lg pl-5 pr-5 pb-2  mr-2 mb-4 text-uppercase"
                  href="#"
                  role="button"
                >
                  Sign in
                </a>
                <a
                  id=""
                  href="/sessions/signup"
                  class="btn half-button btn-warning btn-lg pl-5 pr-5 pb-2 mb-4 text-uppercase"
                  href="#"
                  role="button"
                >
                  Sign up
                </a>
              </div>
            </div>
            <div class="col-md-5 offset-md-1 intro-three-RightSection d-flex align-items-center">
              <div data-aos="fade-left" class="intro-three-ProductImage">
                <img src={header_image} class="img-responsive" alt="img"></img>
              </div>
            </div>
          </div>
        </div>
        <div class="overlay"></div>
      </section>
    </React.Fragment>
  );
}
