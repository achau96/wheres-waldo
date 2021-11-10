import React, { useState, useEffect } from 'react';
import image2 from './hiddenobject2.jpeg';
import DropDownMenu from './DropDownMenu';

const Image2 = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [toggleMenu, setMenu] = useState(false);

  const _onMouseMove = (e) => {
    setCoordinates((prevState) => {
      return { x: e.pageX, y: e.pageY };
    });
  };

  const activeMenu = () => {
    setMenu((prevState) => !prevState);
  };
  useEffect(() => {
    console.log(`X: ${coordinates.x}, Y: ${coordinates.y}`);
    console.log(`Active: ${toggleMenu}`);
  }, [coordinates, toggleMenu]);

  return (
    <div className="image">
      <div>3 images</div>
      <div>
        <img
          src={image2}
          className="image2 cursor"
          alt="image2"
          onClick={(e) => {
            _onMouseMove(e);
            activeMenu();
            console.log('not a toaster');
          }}
        />
        {toggleMenu && (
          <DropDownMenu
            coordinates={coordinates}
            activeMenu={activeMenu}
            itemList={[`unicorn`, `robot`, `panda`]}
          />
        )}
      </div>
    </div>
  );
};

export default Image2;
