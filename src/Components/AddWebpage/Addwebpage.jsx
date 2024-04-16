import React from "react";
import "./Addwebpage.css";
import trashIcon from "../../Images/trash_icon.svg";

const Addwebpage = () => {
  return (
    <>
      <div className="p-6 dashboard-container overflow-hidden">
        <div className="font-roboto font-medium text-3xl">
          HTTP Header Monitor
        </div>
        <div className="toggle-bar flex justify-between my-8">
          <div>
            <span className="font-roboto text-lg text-gray-600 opacity-70">
              Overview
            </span>
            <span className="pl-3 font-normal text-lg font-roboto text-gray-600 opacity-70">
              Demodata
            </span>
          </div>
          <button className="text-white text-roboto font-bold">
            +Add Webpage
          </button>
        </div>
        <div className="bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25">
          <div className="content-in-table relative rounded-xl overflow-auto">
            <div className="shadow-sm overflow-hidden my-8">
              <table className="table-auto text-sm border-collapse w-full">
                <thead>
                  <tr>
                    <th>URL</th>
                    <th>Demo</th>
                    <th>Demo</th>
                    <th>Header Monitored</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-slate-800">
                  <tr>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      /
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      demo
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      1961
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      10
                    </td>
                    <td>
                      <img
                        src={trashIcon}
                        alt=""
                        className="cursor-pointer mx-auto"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      /Home
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      demo
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      1972
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      10
                    </td>
                    <td>
                      <img
                        src={trashIcon}
                        alt=""
                        className="cursor-pointer mx-auto"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      /About-us
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      demo
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      1975
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      10
                    </td>
                    <td>
                      <img
                        src={trashIcon}
                        alt=""
                        className="cursor-pointer mx-auto"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      /Nist-Cybersecurity
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      demo
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      1975
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      10
                    </td>
                    <td>
                      <img
                        src={trashIcon}
                        alt=""
                        className="cursor-pointer mx-auto"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addwebpage;
