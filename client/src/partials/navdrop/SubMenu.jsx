import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false); /* state of component */
  const showSubnav = () => setSubnav(!subnav); /* Toggle Function */

  return (
    <>
      <Link
        to={item.path}
        onClick={item.submenu && showSubnav}
        className="flex tex-[#e1e9fc] justify-between items-center p-4 list-none h-16 text-lg hover:bg-[#252831] border-b-4 border-green-500 cursor-pointer"
      >
        <div>
          <span className="ml-16">{item.name}</span>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
        {subnav &&
          item.subNav.map((item, index) => {
            return (
              <Link to={item.path} key={index}>
                <span className="ml-4">{item.title}</span>
              </Link>
            );
          })}
      </Link>
    </>
  );
};
export default SubMenu;
