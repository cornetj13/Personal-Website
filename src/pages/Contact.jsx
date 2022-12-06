import { HiDocumentText } from 'react-icons/hi';

function Contact() {
  return (
    <div className="flex h-screen bg-lime-700 " id="contact">
      <div className="m-auto bg-lime-500 p-8">
        <h1 className="mb-4 text-4xl text-center font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Get in{' '}
          <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
            touch
          </mark>{' '}
          with me!
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 m-4">
          I am always looking for projects, collaborations, or just plain old
          networking opportunities!
        </p>
        <form action="">
          <div className="mb-6">
            <label
              for="default-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your name:
            </label>
            <input
              type="text"
              id="default-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              for="default-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email:
            </label>
            <input
              type="text"
              id="default-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Write your message here...
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
          <button
            type="button"
            className="m-4 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Send Message!
          </button>
        </form>

        <button
          type="button"
          className="flex flex-col m-4 text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center dark:focus:ring-[#2557D6]/50 mr-2 mb-2"
        >
          <HiDocumentText size={40} className="mt-2" />
          <p className="m-4">Download my Resume!</p>
        </button>
      </div>
    </div>
  );
}

export default Contact;
