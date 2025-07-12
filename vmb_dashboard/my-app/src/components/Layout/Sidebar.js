
import React, { useState } from 'react';
import logo from "../../assets/logo.png";

import dashboardIcon from "../../assets/icons/dashboard.svg";
import membersIcon from "../../assets/icons/members.svg";
import eventsIcon from "../../assets/icons/events.svg";
import profileIcon from "../../assets/icons/profile.svg";
import feedbackIcon from "../../assets/icons/feedback.svg";
import logoutIcon from "../../assets/icons/logout.svg";


const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const menuItems = [
    { name: 'Dashboard', icon: dashboardIcon },
    { name: 'Members', icon: membersIcon },
    { name: 'Events', icon: eventsIcon },
    { name: 'Profile', icon: profileIcon },
    { name: 'Feedback', icon: feedbackIcon },
    { name: 'Logout', icon: logoutIcon },
  ];

  return (
    <div className="w-64 bg-[#b58325] text-white flex flex-col min-h-screen">
      {/* Logo */}
      <div className="p-4 border-b border-[#b58325]">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="w-20 h-20" />
           
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2 ">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => setActiveItem(item.name)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                  activeItem === item.name
                    ? 'bg-[#b58325] text-white  border-white'
                    : 'text-white border-transparent hover:border-white'
                }`}
              >
                <img src={item.icon} alt={item.name} className="w-5 h-5 filter invert" />
                <span>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
