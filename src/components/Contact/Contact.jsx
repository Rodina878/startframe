import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-vh-100 d-flex justify-content-center  mt-5 align-items-center"
    >
      <div className="container">
        <div className="title">
          <h1 className="text-center display-6 fw-bold t-color">
            CONTACT SECTION
          </h1>

          <div className="star-container mt-3 mb-3 d-flex justify-content-center align-items-center">
            <div id="line"></div>
            <i className="fa fa-solid fa-star t-color"></i>
            <div id="line"></div>
          </div>
        </div>

        <div className="w-50 mx-auto">
          <div class="input-container">
            <input
              id="uName"
              type="text"
              className="form-control mt-5 mb-5 border-0 border-bottom"
              placeholder="userName"
            />
            <label for="uName" class="input-label">
              userName
            </label>
          </div>

          <div class="input-container">
            <input
              id="uAge"
              type="text"
              className="form-control mb-5 border-0 border-bottom"
              placeholder="userAge"
            />
            <label for="uAge" class="input-label">
              userAge
            </label>
          </div>

          <div class="input-container">
            <input
              id="uEmail"
              type="email"
              className="form-control mb-5 border-0 border-bottom"
              placeholder="userEmail"
            />
            <label for="uEmail" class="input-label">
              userEmail
            </label>
          </div>

          <div class="input-container">
            <input
              id="uPass"
              type="password"
              className="form-control mb-4 border-0 border-bottom"
              placeholder="userPassword"
            />
            <label for="uPass" class="input-label">
              userPassword
            </label>
          </div>

          <button className="btn px-3">Send Submit</button>
        </div>
      </div>
    </section>
  );
}
