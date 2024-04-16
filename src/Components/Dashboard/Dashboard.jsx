import React from "react";
import "./Dashboard.css";
import clockIcon from "../../Images/clock_icon.svg";
import calenderIcon from "../../Images/calender_icon.svg";

const Dashboard = () => {
  return (
    <>
      <div className="p-6 dashboard-container overflow-hidden">
        <div className="font-roboto font-medium text-3xl">Compliance</div>
        <div className="toggle-bar flex justify-between my-8">
          <div>
            <span className="border-b-2 border-blue-600 text-blue-500 font-roboto text-lg">
              Overview
            </span>
            <span className="pl-3 font-normal text-lg font-roboto text-gray-600 opacity-70">
              Files
            </span>
          </div>
          <select name="" id="">
            <option value="one">Last 30 Days</option>
            <option value="two">two</option>
          </select>
        </div>
        <section className="monitoring-container">
          <div className="grid grid-cols-4 gap-5">
            <div className="monitoring-content border border-solid border-gray-200 rounded-3xl p-5">
              <div className="head-block flex justify-between border-b border-solid border-gray-200 pb-2">
                <div className="flex flex-col">
                  <span className="font-roboto text-black opacity-50 text-sm font-normal">
                    Frontend Javascript Monitoring
                  </span>
                  <span className="font-roboto font-bold text-lg custom-rgba-15-15-15-05">
                    Javascripts Monitored
                  </span>
                </div>
                <span className="font-roboto font-medium text-base text-pink-600">
                  30 Alerts
                </span>
              </div>
              <div className="below-head pt-5">
                <div className="number-block flex items-center justify-center">
                  <span className="text-teal-400 font-inter font-32 font-bold">
                    139
                  </span>
                </div>
              </div>
            </div>
            <div className="monitoring-content border border-solid border-gray-200 rounded-3xl p-5">
              <div className="head-block flex justify-between border-b border-solid border-gray-200 pb-2">
                <div className="flex flex-col">
                  <span className="font-roboto text-black opacity-50 text-sm font-normal">
                    Certificate Monitoring
                  </span>
                  <span className="font-roboto font-bold text-lg custom-rgba-15-15-15-05">
                    Certificates Monitored
                  </span>
                </div>
              </div>
              <div className="below-head pt-5">
                <div className="number-block flex items-center justify-center">
                  <span className="text-blue-600 font-inter font-32 font-bold">
                    139
                  </span>
                </div>
              </div>
            </div>
            <div className="monitoring-content border border-solid border-gray-200 rounded-3xl p-5">
              <div className="head-block flex justify-between border-b border-solid border-gray-200 pb-2">
                <div className="flex flex-col">
                  <span className="font-roboto text-black opacity-50 text-sm font-normal">
                    Certificate Monitoring
                  </span>
                  <span className="font-roboto font-bold text-lg custom-rgba-15-15-15-05">
                    Certificates Using Weak Algorithm
                  </span>
                </div>
              </div>
              <div className="below-head pt-5"></div>
            </div>
            <div className="monitoring-content border border-solid border-gray-200 rounded-3xl p-5">
              <div className="head-block flex justify-between border-b border-solid border-gray-200 border-opacity-50 pb-2">
                <div className="flex flex-col">
                  <span className="font-roboto text-white text-sm font-normal">
                    Scripts Software Supply Chain
                  </span>
                  <span className="font-roboto font-bold text-lg text-white">
                    Risk Evaluation
                  </span>
                </div>
              </div>
              <div className="below-head pt-5"></div>
            </div>
          </div>
          <div className="monitoring-second-container mt-8 grid grid-cols-2">
            <div className="grid grid-cols-1 gap-5">
              <div className="monitoring-aspects p-5 border border-solid border-black border-opacity-10 rounded-3xl">
                <div className="heading flex justify-between">
                  <span className="font-roboto text-black font-bold text-2xl">
                    HTTP Header Monitor
                  </span>
                  <span className="font-roboto font-medium text-base text-pink-600">
                    30 Alerts
                  </span>
                </div>
                {/* chart added */}
                <div id="container"></div>

                <div className="recent-changes-block pt-6">
                  <span className="font-roboto font-bold text-gray-600 text-base">
                    Recent Changes
                  </span>
                  <div className="flex flex-col gap-y-3 pt-3">
                    <div className="list-items flex justify-between text-sm font-normal text-gray-600 opacity-100 font-roboto">
                      <span className="flex gap-1">
                        {" "}
                        <img src={clockIcon} alt="" />
                        03:00 PM
                      </span>
                      <span className="flex gap-1">
                        {" "}
                        <img src={calenderIcon} alt="" />
                        23/02/2034
                      </span>
                      <span>CSP is missing in exmaple.com</span>
                    </div>
                    <div className="list-items flex justify-between text-sm font-normal text-gray-600 opacity-100 font-roboto">
                      <span className="flex gap-1">
                        {" "}
                        <img src={clockIcon} alt="" />
                        03:00 PM
                      </span>
                      <span className="flex gap-1">
                        {" "}
                        <img src={calenderIcon} alt="" />
                        23/02/2034
                      </span>
                      <span>CSP is missing in exmaple.com</span>
                    </div>
                    <div className="list-items flex justify-between text-sm font-normal text-gray-600 opacity-100 font-roboto">
                      <span className="flex gap-1">
                        {" "}
                        <img src={clockIcon} alt="" />
                        03:00 PM
                      </span>
                      <span className="flex gap-1">
                        {" "}
                        <img src={calenderIcon} alt="" />
                        23/02/2034
                      </span>
                      <span>CSP is missing in exmaple.com</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="monitoring-aspects p-5 border border-solid border-black border-opacity-10 rounded-3xl">
                <div className="heading flex justify-between">
                  <span className="font-roboto text-black font-bold text-2xl">
                    Frontend Javascript Monitoring
                  </span>
                </div>
                <div className="recent-changes-block pt-6">
                  <span className="font-roboto font-bold text-gray-600 text-base">
                    Recent Changes
                  </span>
                  <div className="flex flex-col gap-y-3 pt-3">
                    <div className="list-items flex justify-between text-sm font-normal text-gray-600 opacity-100 font-roboto">
                      <span className="flex gap-1">
                        {" "}
                        <img src={clockIcon} alt="" />
                        03:00 PM
                      </span>
                      <span className="flex gap-1">
                        {" "}
                        <img src={calenderIcon} alt="" />
                        23/02/2034
                      </span>
                      <span>CSP is missing in exmaple.com</span>
                    </div>
                    <div className="list-items flex justify-between text-sm font-normal text-gray-600 opacity-100 font-roboto">
                      <span className="flex gap-1">
                        {" "}
                        <img src={clockIcon} alt="" />
                        03:00 PM
                      </span>
                      <span className="flex gap-1">
                        {" "}
                        <img src={calenderIcon} alt="" />
                        23/02/2034
                      </span>
                      <span>CSP is missing in exmaple.com</span>
                    </div>
                    <div className="list-items flex justify-between text-sm font-normal text-gray-600 opacity-100 font-roboto">
                      <span className="flex gap-1">
                        {" "}
                        <img src={clockIcon} alt="" />
                        03:00 PM
                      </span>
                      <span className="flex gap-1">
                        {" "}
                        <img src={calenderIcon} alt="" />
                        23/02/2034
                      </span>
                      <span>CSP is missing in exmaple.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5">
              <div className="bar-charts border-solid border-gray-200 rounded-3xl p-5">
                <div class="head-block flex justify-between border-b border-solid border-gray-200 pb-2">
                  <div class="flex flex-col">
                    <span class="font-roboto text-black opacity-50 text-sm font-normal">
                      Certificate Monitoring
                    </span>
                    <span class="font-roboto font-bold text-lg custom-rgba-15-15-15-05">
                      Expiring Certificates
                    </span>
                  </div>
                </div>
              </div>
              <div className="bar-charts border-solid border-gray-200 rounded-3xl p-5">
                <div class="head-block flex justify-between border-b border-solid border-gray-200 pb-2">
                  <div class="flex flex-col">
                    <span class="font-roboto text-black opacity-50 text-sm font-normal">
                      Frontend Javascript Monitoring
                    </span>
                    <span class="font-roboto font-bold text-lg custom-rgba-15-15-15-05">
                      FQDN Per Category
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
