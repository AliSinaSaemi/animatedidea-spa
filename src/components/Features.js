import React from "react";
import employee from "../images/landing/service-3/service_3-1.svg";
export default function Features() {
  return (
    <React.Fragment>
      <section id="features-wrap" class="features-five p-t-b-80">
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <h2 class="font-weight-bold">Some Awesome Features</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                velit unde cupiditate recusandae, neque dicta nisi omnis
                voluptates.
              </p>

              <div class="row">
                <div
                  data-aos="fade-right"
                  class="col-md-6 col-lg-12 mt-4 mb-4 col-sm-6"
                >
                  <div class="benefits-contents d-flex">
                    <i class="eva eva-home-outline mr-2 text-28"></i>
                    <div class="benefits-contents__info">
                      <h3 class="card-title font-weight-bold">Benefits</h3>
                      <span class="text-15">
                        Lorem ipsum dolor, sit amet consectetur. Lorem ipsum
                        dolor, sit amet consectetur.
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  class="col-md-6 col-lg-12 mt-4 mb-4 col-sm-6"
                >
                  <div class="benefits-contents d-flex">
                    <i class="eva eva-color-palette-outline mr-2 text-28"></i>
                    <div class="benefits-contents__info">
                      <h3 class="card-title font-weight-bold">Design</h3>
                      <span class="text-15">
                        Lorem ipsum dolor, sit amet consectetur Lorem ipsum
                        dolor, sit amet consectetur.
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-left"
                  class="col-md-6 col-lg-12 mt-4 mb-4 col-sm-6 mb-lg-0"
                >
                  <div class="benefits-contents d-flex">
                    <i class="eva eva-globe-2-outline mr-2 text-28"></i>
                    <div class="benefits-contents__info">
                      <h3 class="card-title font-weight-bold">Global Magic</h3>
                      <span class="text-15">
                        Lorem ipsum dolor, sit amet consectetur Lorem ipsum
                        dolor, sit amet consectetur.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5 offset-lg-1 d-flex align-items-center">
              <div class="benefits-left-img mb-4">
                <img
                  src={employee}
                  data-aos="fade-left"
                  data-aos-duration="1800"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
