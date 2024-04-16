import React from "react";
import "./Sidebar.css";
import WOLogo from "../../Images/weborion_logo.svg";
import dashBoardIcon from "../../Images/dashboard_icon.svg";
import domainIcon from "../../Images/domain_icon.svg";
import summaryIcon from "../../Images/summary_icon.svg";
import monitorIcon from "../../Images/monitor-icon.svg";
import protectorIcon from "../../Images/protector-icon.svg";
import restorerIcon from "../../Images/restorer-icon.svg";
import alertsIcon from "../../Images/alerts_icon.svg";
import reportsIcon from "../../Images/reports_icon.svg";
import complianceIcon from "../../Images/compliance_icon.svg";
import accountSIcon from "../../Images/accountSettings_icon.svg";
import subscriptionIcon from "../../Images/subscription_icon.svg";
import downCaret from "../../Images/sidebar_down_caret.svg";

const Sidebar = () => {
  return (
    <>
      <aside className="float-left relative left-0 lg:block">
        {/* <div>
          <a className="pt-9 left-2.5 inline-block">
            <img src={WOLogo} alt="weborion" className="absolute" />
          </a>
        </div> */}
        <div class="relative">
          <a class="pt-9 left-2 inline-block">
            <img src={WOLogo} alt="weborion" class="absolute" />
          </a>
        </div>
        <div className="flex flex-col gap-60 pt-9">
          <ul className="list-none flex flex-col flex-nowrap mb-0 gap-2.5">
            <li>
              <a href="#" className="px-2.5 py-2.5 flex gap-3">
                <img src={dashBoardIcon} alt="dashboard" />
                <span className="font-roboto">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="px-2.5 py-2.5 flex gap-3">
                <img src={domainIcon} alt="domain" />
                <span className="font-roboto">Domain</span>
                <img
                  src={downCaret}
                  alt="down-caret"
                  className="relative down-caret-image"
                />
              </a>
            </li>
            <li>
              <a href="#" className="px-2.5 py-2.5 flex gap-3">
                <img src={summaryIcon} alt="domain" />
                <span className="font-roboto">Summary</span>
              </a>
            </li>
            <li>
              <a href="#" className="px-2.5 py-2.5 flex gap-3">
                <img src={monitorIcon} alt="domain" />
                <span className="font-roboto">Monitor</span>
                <img
                  src={downCaret}
                  alt="down-caret"
                  className="relative down-caret-image"
                />
              </a>
            </li>
            <li>
              <a href="#" className="px-2.5 py-2.5 flex gap-3">
                <img src={protectorIcon} alt="protector" />
                <span className="font-roboto">Protector</span>
              </a>
            </li>
            <li>
              <a href="#" className="px-2.5 py-2.5 flex gap-3">
                <img src={restorerIcon} alt="restorer" />
                <span className="font-roboto">Restorer</span>
              </a>
            </li>
          </ul>
          <ul className="list-none flex flex-col flex-nowrap p-5 mb-0 gap-2.5 pb-9">
            <li>
              <a href="#" className="px-2.5 py-2.5 flex gap-3">
                <img src={alertsIcon} alt="alerts" />
                <span className="font-roboto">Alerts/Logs</span>
              </a>
            </li>
            <li>
              <a href="#" className="px-2.5 py-2.5 flex gap-3">
                <img src={reportsIcon} alt="reports" />
                <span className="font-roboto">Reports</span>
              </a>
            </li>
            <li className="highlighted-item">
              <a href="#" className="px-2.5 py-2.5 flex gap-3">
                <img src={complianceIcon} alt="compliance" />
                <span className="font-roboto">Compliance</span>
              </a>
            </li>
            <li>
              <a href="#" className="px-2.5 py-2.5 flex gap-3">
                <img src={accountSIcon} alt="account" />
                <span className="font-roboto">Account Settings</span>
              </a>
            </li>
            <li>
              <a href="#" className="px-2.5 py-2.5 flex gap-3">
                <img src={subscriptionIcon} alt="subscription" />
                <span className="font-roboto">Subscription</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
