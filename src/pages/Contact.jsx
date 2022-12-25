import { useState } from 'react';
import { HiDocumentText } from 'react-icons/hi';

function Contact() {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  return (
    <div
      className="outer-box-color outer-box-layout outer-box-border"
      id="contact"
    >
      <div className="inner-box-color inner-box-layout inner-box-border col-flex center-all">
        <h2 className="text-header center-all">
          Get in <mark className="text-mark">touch</mark> with me!
        </h2>
        <p className="text-tagline-size my-4">
          I am always looking for projects, collaborations, or just plain old
          networking opportunities!
        </p>
        <form>
          <div className='row-flex center-around'>
            <div className="input-div">
              <label
                htmlFor="name-input"
                className="text-subtagline-size block mb-2"
              >
                Your name:
              </label>
              <input
                type="text"
                id="name-input"
                className="input-forms-colors input-forms-layout"
              />
            </div>
            <div className="input-div">
              <label
                htmlFor="email-input"
                className="text-subtagline-size block mb-2"
              >
                Your email:
              </label>
              <input
                type="text"
                id="email-input"
                className="input-forms-colors input-forms-layout"
              />
            </div>
          </div>
          <div className="input-div">
            <label
              htmlFor="message-input"
              className="text-subtagline-size block mb-4"
            >
              Write your message here...
            </label>
            <textarea
              id="message-input"
              rows="8"
              className="input-forms-colors input-textbox-layout"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
          <button
            type="button"
            className="contact-button-colors contact-button-border contact-button-layout focus:outline-none focus:ring-4 font-medium text-sm text-center"
          >
            Send Message!
          </button>
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
