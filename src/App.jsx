import React from "react";
import star from "../images/icon-star.svg";
import illustration from "../images/illustration-thank-you.svg";

export const App = () => {
  const [rating, setRating] = React.useState(0);
  const [submitted, setSubmitted] = React.useState(false);

  function handleChange(event) {
    setRating(event.target.parentElement.textContent);
    const labels = document.querySelectorAll("label");
    labels.forEach((label) => label.classList.remove("active"));
    event.target.parentElement.classList.add("active");
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <article className="rating-component">
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <img
              className="rating-component__star"
              src={star}
              alt=""
              aria-hidden="true"
            ></img>
            <fieldset>
              <legend className="rating-component__title">
                How did we do?
              </legend>
              <p>
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </p>

              <div className="rating">
                <label>
                  <input type="radio" name="rating" onChange={handleChange} />1
                </label>
                <label>
                  <input type="radio" name="rating" onChange={handleChange} />2
                </label>
                <label>
                  <input type="radio" name="rating" onChange={handleChange} />3
                </label>
                <label>
                  <input type="radio" name="rating" onChange={handleChange} />4
                </label>
                <label>
                  <input type="radio" name="rating" onChange={handleChange} />5
                </label>
              </div>

              <button>Submit</button>
            </fieldset>
          </form>
        ) : (
          <div className="rating-component--thank-you">
            <img src={illustration}></img>
            <p className="rating-component__rating">
              You selected {rating} out of 5
            </p>
            <h3 className="rating-component__title rating-component__title--thank-you">
              Thank you!
            </h3>
            <p className="rating-component__description">
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </p>
          </div>
        )}
      </article>

      <footer className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.frontendmentor.io/profile/itsechi">itsechi</a>.
      </footer>
    </>
  );
};
