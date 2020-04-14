import React, { Component } from "react";
import "./App.scss";
import Loading from "./components/Loading";
import Banner from "./components/Banner";
import Features from "./components/Features";
import Services from "./components/Services";
import Works from "./components/Works";
import navbar_logo from "./images/landing/lOGO_d/logo.svg";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Loading />
        <div class="main-header header-fixed-default " id="home-header">
          <nav class="navbar container w-100 navbar-expand-lg navbar-transparent bg-transparent">
            <div class="logo">
              <img src={navbar_logo} alt="" />
            </div>

            <div
              class="menu-toggle navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <div></div>
              <div></div>
              <div></div>
            </div>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <div class="d-flex align-items-center">
                <div class="dropdown mega-menu d-none d-md-block">
                  <a
                    href="#"
                    class="btn  dropdown-toggle mr-3"
                    id="dropdownMegaMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Mega Menu
                  </a>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <div class="row m-0">
                      <div class="col-md-4 p-4 bg-img">
                        <h2 class="title">
                          Mega Menu <br /> Sidebar
                        </h2>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Asperiores natus laboriosam fugit, consequatur.
                        </p>
                        <p class="mb-4">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Exercitationem odio amet eos dolore suscipit
                          placeat.
                        </p>
                        <button class="btn btn-lg btn-rounded btn-outline-warning">
                          Learn More
                        </button>
                      </div>
                      <div class="col-md-4 p-4">
                        <p class="text-primary text--cap border-bottom-primary d-inline-block">
                          Demos
                        </p>
                        <div class="menu-icon-grid w-auto p-0">
                          <a href="../views/landing.v1.html">Version 1</a>
                          <a href="../views/landing.v2.html">Version 2</a>
                          <a href="../views/landing.v3.html">Version 3</a>
                          <a href="../views/landing.v4.html">Version 4</a>
                          <a href="../views/landing.v5.html">Version 5</a>
                          <a href="../views/landing.v6.html">Version 6</a>
                          <a href="../views/landing.v7.html">Version 7</a>
                          <a href="../views/landing.v8.html">Version 8</a>
                          <a href="../views/landing.v9.html">Version 9</a>
                          <a href="../views/landing.v10.html">Version 10</a>
                          <a href="../views/landing.v11.html">Version 11</a>
                        </div>
                      </div>
                      <div class="col-md-4 p-4">
                        <p class="text-primary text--cap border-bottom-primary d-inline-block">
                          Components
                        </p>
                        <ul class="links">
                          <li>
                            <a href="../components/accordions.html">
                              Accordion
                            </a>
                          </li>
                          <li>
                            <a href="../components/alerts.html">Alerts</a>
                          </li>
                          <li>
                            <a href="../components/buttons.html">Buttons</a>
                          </li>
                          <li>
                            <a href="../components/all-pricing.html">Pricing</a>
                          </li>
                          <li>
                            <a href="../components/carousels.html">Carousels</a>
                          </li>
                          <li>
                            <a href="../components/all-features.html">
                              Features
                            </a>
                          </li>
                          <li>
                            <a href="../components/dropdown.html">Dropdown</a>
                          </li>
                          <li>
                            <a href="../components/all-services.html">
                              Services
                            </a>
                          </li>
                          <li>
                            <a href="../components/all-extra-features.html">
                              Extra Features
                            </a>
                          </li>
                          <li>
                            <a href="../components/modals.html">Modals</a>
                          </li>
                          <li>
                            <a href="../components/signin.html">Sign in</a>
                          </li>
                          <li>
                            <a href="../components/signup.html">Sign up</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginRight: "auto" }}></div>

              <div class="header-part-right">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="scroll-to nav-link m-2" href="#">
                      Home <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="scroll-to nav-link m-2" href="#features-wrap">
                      Features
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="scroll-to nav-link m-2" href="#services-wrap">
                      Services
                    </a>
                  </li>

                  <li class="nav-item">
                    <a href="#" class="scroll-to nav-link m-2 m-2">
                      Other Sections{" "}
                    </a>

                    <ul>
                      <li class="nav-item">
                        <a href="#teams-wrap" class="scroll-to menu-item">
                          Team
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          href="#testimonials-wrap"
                          class="scroll-to menu-item"
                        >
                          Testimonial
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          href="#extra-feature-wrap"
                          class="scroll-to menu-item"
                        >
                          Extra features
                        </a>
                      </li>
                      <li>
                        <a>Second Level</a>

                        <ul>
                          <li class="nav-item">
                            <a href="#news-wrap" class="scroll-to menu-item">
                              Blog
                            </a>
                          </li>
                          <li class="nav-item">
                            <a href="#faqs-wrap" class="scroll-to  menu-item">
                              Faqs
                            </a>
                          </li>
                          <li>
                            <a>Third Level</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item">
                    <a class="scroll-to nav-link m-2" href="#works-wrap">
                      Works
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="scroll-to nav-link m-2" href="#pricing-wrap">
                      Pricing
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class="scroll-to nav-link m-2 " href="#contacts-wrap">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div class="app-landing-wrap landing_wrap">
          <div id="landing_wrap" class=" landing-indigo">
            <Banner />
            <Features />
            <Services />
            <Works />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
