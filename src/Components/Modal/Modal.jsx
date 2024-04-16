import React from "react";
import "./Modal.css";
import caretUp from "../../Images/caret_up_icon.svg";
import chromeIcon from "../../Images/chrome_icon.svg";

const Modal = () => {
  return (
    <>
      <div className="modal-container">
        <div className="modal-heading flex items-center justify-center flex-col">
          <span className="mb-2 font-roboto font-medium text-3xl text-gray-800">
            Add Webpage
          </span>
          <div className="url-modal-block rounded-lg">
            <span className="text-gray-500 font-medium text-lg font-roboto">
              /blog/preventing-web-defacement-a-technical-mangers-guide-to-securing-web-application
            </span>
          </div>
        </div>
        <div className="below-heading-block mt-12 mx-auto">
          <div className="polling-and-plan-type">
            <div className="flex justify-between items-center border-b border-gray-200 pb-3.5">
              <span className="font-roboto font-medium text-gray-500 text-lg">
                Polling Interval:
              </span>
              <div className="flex gap-2">
                <button className="pt-1.5 pr-2.5 pb-1.5 pl-2.5 font-roboto font-normal text-white text-base active-btn">
                  5 Minutes
                </button>
                <button className="font-normal text-base font-roboto text-gray-500">
                  15 Minutes
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center pt-3.5">
              <span className="font-roboto font-medium text-gray-500 text-lg">
                Plan Type:
              </span>
              <div className="flex gap-4">
                <button className="pt-1.5 pr-2.5 pb-1.5 pl-2.5 font-roboto font-normal text-blue-500 rounded-lg text-base border-2 border-blue-500">
                  Gold
                </button>
                <button className="font-normal text-base font-roboto text-gray-500">
                  Silver
                </button>
                <button className="font-normal text-base font-roboto text-gray-500">
                  Bronze
                </button>
              </div>
            </div>
          </div>
          <div className="advance-settings-container">
            <div className="flex items-center">
              <div className="flex items-center pr-2">
                <span className="font-roboto text-base font-semibold text-gray-800 text-opacity-50">
                  Advanced Settings
                </span>
                <img src={caretUp} alt="caret-up" />
              </div>
              <div className="border-2 border-gray-200 h-0.5 w-full"></div>
            </div>
            <div className="flex justify-between items-center pt-3.5 border-b border-solid border-gray-300 pb-3">
              <span className="font-roboto font-medium text-gray-500 text-lg">
                User Agent:
              </span>
              <div className="flex gap-4">
                <button className="flex gap-1 pt-1.5 pr-2.5 pb-1.5 pl-2.5 font-roboto font-normal text-blue-500 rounded-lg text-base border-2 border-blue-500">
                  <img src={chromeIcon} alt="" className="w-6 h-6" />
                  Chrome
                </button>
                <button className="font-normal text-base font-roboto text-gray-500">
                  Firefox
                </button>
                <button className="font-normal text-base font-roboto text-gray-500">
                  Safari
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center pt-3.5 border-b border-solid border-gray-300 pb-3">
              <span className="font-roboto font-medium text-gray-500 text-lg">
                Layers of Script:
              </span>
              <div className="flex gap-4">
                <button className="gap-1 pr-2.5 pl-2.5 font-roboto font-normal text-blue-500 rounded-lg text-base border-2 border-blue-500">
                  -
                </button>

                <span>10</span>

                <button className="gap-1 pr-2.5 pl-2.5 font-roboto font-normal text-blue-500 rounded-lg text-base border-2 border-blue-500">
                  +
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center pt-3.5 border-b border-solid border-gray-300 pb-3">
              <span className="font-roboto font-medium text-gray-500 text-lg">
                Selector Timeout
              </span>
              <div className="">
                <select
                  name=""
                  id=""
                  className="border border-solid border-gray-400 py-2 px-8 rounded-xl"
                >
                  <option value="three" className="text-gray-600 font-roboto">
                    3 Seconds
                  </option>
                  <option value="four" className="text-gray-600 font-roboto">
                    4 Seconds
                  </option>
                  <option value="five" className="text-gray-600 font-roboto">
                    5 Seconds
                  </option>
                </select>
              </div>
            </div>
            <div className="flex justify-between items-center pt-3.5 pb-3">
              <span className="font-roboto font-medium text-gray-500 text-lg">
                Page Timeout
              </span>
              <div className="">
                <select
                  name=""
                  id=""
                  className="border border-solid border-gray-400 py-2 px-8 rounded-xl"
                >
                  <option value="three" className="text-gray-600 font-roboto">
                    15 Seconds
                  </option>
                  <option value="four" className="text-gray-600 font-roboto">
                    30 Seconds
                  </option>
                  <option value="five" className="text-gray-600 font-roboto">
                    1 Minute
                  </option>
                  <option value="five" className="text-gray-600 font-roboto">
                    2 Minutes
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="button-block text-center mt-8">
          <button className="text-white text-roboto font-bold">Add Webpage</button>
        </div>
      </div>
    </>
  );
};

export default Modal;
