import "./App.css";
import { useState } from "react";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [meetingTool, setMeetingTool] = useState("google-meet");
  const [customMeetingTool, setCustomMeetingTool] = useState("");

  // Define your meeting tool options here
  const meetingToolOptions = [
    { label: "Slack", value: "slack" },
    { label: "Google Meet", value: "google-meet" },
    { label: "Zoom", value: "zoom" },
    { label: "Discord", value: "discord" },
    { label: "Other", value: "other" },
  ];

  // const handleSubmit = (e: { preventDefault: () => void }) => {
  //   e.preventDefault();
  //   // Handle form submission logic here if more than just netlify form handling...
  // };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-700 to-gray-900 space-y-2 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full space-y-8 p-10 bg-white rounded-lg shadow-lg">
        <h2 className="text-center font-extrabold flex flex-col justify-center items-center text-gray-800 text-3xl sm:text-4xl">
          <span>The Heartbroken Dev</span>
          <img
            src="/sadplanktonwithheart.png"
            className="ml-2 h-auto w-24 sm:w-32"
            alt="Heartbroken"
          />
        </h2>
      </div>
      <div
        id="hereFrom"
        className="max-w-lg w-full space-y-8 p-10 bg-gray-800 rounded-lg shadow-lg"
      >
        <div>
          <p className="mt-2 text-center text-sm text-gray-400">
            Here from{" "}
            <a
              target="_blank"
              href="https://www.reddit.com/r/startups/comments/1bky7we/can_i_teach_you_how_to_code"
              className="text-red-600 hover:text-red-800"
            >
              my Reddit post
            </a>{" "}
            and want me to teach you how to code?
          </p>
        </div>
        {!showForm && (
          <div className="text-center">
            <button
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 transition duration-150 ease-in-out"
              onClick={() => setShowForm(true)}
            >
              Sign up here
            </button>
          </div>
        )}
        {showForm && (
          <form
            className="mt-8 space-y-6"
            data-netlify="true"
            method="POST"
            name="contact"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <h3 className="text-gray-100">Fill in your info below</h3>
              </div>
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-600 placeholder-gray-500 text-gray-100 rounded-t-md focus:outline-none focus:ring-red-700 focus:border-red-700 focus:z-10 sm:text-sm"
                  placeholder="Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-600 placeholder-gray-500 text-gray-100 rounded-b-md focus:outline-none focus:ring-red-700 focus:border-red-700 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="why" className="sr-only">
                  Why do you want to learn how to code?
                </label>
                <textarea
                  id="why"
                  name="why"
                  rows={3}
                  autoComplete="off"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-600 placeholder-gray-500 text-gray-100 focus:outline-none focus:ring-red-700 focus:border-red-700 focus:z-10 sm:text-sm"
                  placeholder="Why do you want to learn how to code?"
                />
              </div>
              <div>
                <label htmlFor="what" className="sr-only">
                  What would you do with the ability to build software?
                </label>
                <textarea
                  id="what"
                  name="what"
                  rows={3}
                  autoComplete="off"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-600 placeholder-gray-500 text-gray-100 focus:outline-none focus:ring-red-700 focus:border-red-700 focus:z-10 sm:text-sm"
                  placeholder="What would you do with the ability to build software?"
                />
              </div>
              <div>
                <label htmlFor="who" className="sr-only">
                  Who are you that makes you a fit for this?
                </label>
                <textarea
                  id="who"
                  name="who"
                  rows={3}
                  autoComplete="off"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-600 placeholder-gray-500 text-gray-100 focus:outline-none focus:ring-red-700 focus:border-red-700 focus:z-10 sm:text-sm"
                  placeholder="Who are you that makes you a fit for this?"
                />
              </div>
              <div>
                <label htmlFor="timezone" className="sr-only">
                  Your Timezone
                </label>
                <input
                  id="timezone"
                  name="timezone"
                  type="text"
                  autoComplete="off"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-600 placeholder-gray-500 text-gray-100 focus:outline-none focus:ring-red-700 focus:border-red-700 focus:z-10 sm:text-sm"
                  placeholder="Timezone"
                />
              </div>
              <div>
                <label htmlFor="preferredTime" className="sr-only">
                  Your preferred time to meet
                </label>
                <input
                  id="preferredTime"
                  name="preferredTime"
                  type="text"
                  autoComplete="off"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-600 placeholder-gray-500 text-gray-100 focus:outline-none focus:ring-red-700 focus:border-red-700 focus:z-10 sm:text-sm"
                  placeholder="Preferred time to meet"
                />
              </div>
              <div>
                <label htmlFor="experience" className="sr-only">
                  Experience with building software
                </label>
                <input
                  id="experience"
                  name="experience"
                  type="text"
                  autoComplete="off"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-600 placeholder-gray-500 text-gray-100 focus:outline-none focus:ring-red-700 focus:border-red-700 focus:z-10 sm:text-sm"
                  placeholder="Experience with building software"
                />
              </div>
              <div>
                <label htmlFor="notes" className="sr-only">
                  Any other notes about how you'd ideally like this to be setup?
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-600 placeholder-gray-500 text-gray-100 focus:outline-none focus:ring-red-700 focus:border-red-700 focus:z-10 sm:text-sm"
                  placeholder="Any other notes about how you'd ideally like this to be setup? Frequency of meetings, length of meetings, style of instruction, etc."
                ></textarea>
              </div>
              <div>
                <label htmlFor="meetingTool" className="text-gray-100">
                  Preferred Meeting Tool
                </label>
                <select
                  id="meetingTool"
                  name="meetingTool"
                  className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-600 text-gray-100 bg-gray-700 focus:outline-none focus:ring-red-700 focus:border-red-700 focus:z-10 sm:text-sm"
                >
                  <option value="google-meet">Google Meet</option>
                  <option value="slack">Slack</option>
                  <option value="zoom">Zoom</option>
                  <option value="discord">Discord</option>
                  <option value="other">Other (enter below)</option>
                </select>
              </div>
                <div>
                  <label htmlFor="customMeetingTool" className="text-gray-100">
                    Custom Meeting Tool
                  </label>
                  <input
                    id="customMeetingTool"
                    name="customMeetingTool"
                    type="text"
                    autoComplete="off"
                    className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-600 placeholder-gray-500 text-gray-100 focus:outline-none focus:ring-red-700 focus:border-red-700 focus:z-10 sm:text-sm"
                    placeholder="Other Meeting Tool"
                  />
                </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 transition duration-150 ease-in-out"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;
