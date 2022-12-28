import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { HiDocumentText } from 'react-icons/hi';

function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      className="outer-box-color outer-box-layout outer-box-border"
      id="contact"
    >
      <div className="inner-box-color inner-box-layout inner-box-border col-flex center-all">
        <h2 className="text-header center-all">
          Get in <mark className="text-mark">touch</mark> with me!
        </h2>
        <p className="text-tagline-size mt-2 mb-6">
          I am always looking for projects, collaborations, or just plain old
          networking opportunities!
        </p>
        <form ref={formRef} onSubmit={sendEmail}>
          <div className="row-flex center-around">
            <div className="input-div">
              <label htmlFor="user_name" className="text-subtagline-size block">
                Your name:
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                className="input-forms-colors input-forms-layout"
              />
            </div>
            <div className="input-div">
              <label
                htmlFor="user_email"
                className="text-subtagline-size block"
              >
                Your email:
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                className="input-forms-colors input-forms-layout"
              />
            </div>
          </div>
          <div className="input-div">
            <label
              htmlFor="message"
              className="text-subtagline-size block mb-4"
            >
              Write your message here...
            </label>
            <textarea
              id="message"
              name="message"
              rows="8"
              placeholder="Write your thoughts here..."
              className="input-forms-colors input-textbox-layout"
            ></textarea>
          </div>
          <input
            type="submit"
            value="Send Message!"
            className="contact-button-colors contact-button-border contact-button-layout focus:outline-none focus:ring-4 font-medium text-sm text-center"
          />
        </form>
        <div className="w-full row-flex center-all mt-6">
          <button
            type="button"
            className="contact-button-colors contact-button-border col-flex contact-button-layout focus:ring-4 focus:outline-none font-medium text-sm text-center items-center"
          >
            <HiDocumentText className="contact-resume-icon" />
            <p className="m-4">Download my Resume!</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
