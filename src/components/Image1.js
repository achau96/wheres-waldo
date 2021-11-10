import React, { useEffect, useState } from 'react';
import image1 from './hiddenobject.png';
import DropDownMenu from './DropDownMenu';

const Image1 = () => {
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
      <div>This is where image 1 will go</div>
      <div>
        <img
          src={image1}
          className="image1 cursor"
          alt="image1"
          useMap="#testmap"
          onClick={(e) => {
            _onMouseMove(e);
            activeMenu();
            console.log('not a toaster');
          }}
        />
        <map name="testmap">
          <area
            shape="rect"
            className="image1"
            coords="645,336,676,371"
            onClick={(e) => {
              e.preventDefault();
              console.log(e);
              _onMouseMove(e);
              setMenu((prevState) => !prevState);
              console.log('this is toaster');
            }}
            alt="test"
          />
        </map>
        {toggleMenu && (
          <DropDownMenu
            coordinates={coordinates}
            activeMenu={activeMenu}
            itemList={[`toaster`, `cube`, `planet`]}
          />
        )}
      </div>
    </div>
  );
};

export default Image1;

//function to get x and y coordinate of image
// const image1 = document.querySelector('.image1')
// image1.onclick = function(e){
//   let x = e.pageX; console.log("X: " + e.offsetX + "Y: " + e.offsetY )}
