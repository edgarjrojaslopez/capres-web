import React from 'react';

const ButtonNav = (props) => {
  return (
    <button className="bg-blue-500 py-2 px-6 transition duration-300 ease-in-out md:ml-10 rounded font-medium hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white">
      {props.children}
    </button>
  );
};

export default ButtonNav;
