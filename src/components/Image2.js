import React, { useState, useEffect } from 'react';
import image2 from './hiddenobject2.jpeg';
import DropDownMenu from './DropDownMenu';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase';

const Image2 = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [toggleMenu, setMenu] = useState(false);
  const [itemList, setList] = useState({});

  const _onMouseMove = (e) => {
    setCoordinates((prevState) => {
      return { x: e.pageX, y: e.pageY };
    });
  };

  const activeMenu = () => {
    setMenu((prevState) => !prevState);
  };

  useEffect(() => {
    async function uploadCoords() {
      const querySnapshot = await getDocs(collection(db, 'coordinates'));
      querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
        if (doc.id === `8EnNjYfKIk6QeyM0LhOT`) {
          setList(doc.data());
        }
      });
    }
    uploadCoords();
  }, []);

  return (
    <div className="image">
      <div>3 images</div>
      <div>
        <img
          src={image2}
          className="image2 cursor"
          alt="image2"
          useMap="#image2Map"
          onClick={(e) => {
            _onMouseMove(e);
            activeMenu();
          }}
        />
        <map name="image2Map">
          <area
            shape="rect"
            className="cursor"
            coords={itemList[`panda`]}
            onClick={(e) => {
              e.preventDefault();
              _onMouseMove(e);
              setMenu((prevState) => !prevState);
              console.log(`panda acquired`);
            }}
            alt="test"
          />
          <area
            shape="rect"
            className="cursor"
            coords={itemList[`robot`]}
            onClick={(e) => {
              e.preventDefault();
              _onMouseMove(e);
              setMenu((prevState) => !prevState);
              console.log(`robot acquired`);
            }}
            alt="test"
          />
          <area
            shape="rect"
            className="cursor"
            coords={itemList[`unicorn`]}
            onClick={(e) => {
              e.preventDefault();
              _onMouseMove(e);
              setMenu((prevState) => !prevState);
              console.log(`unicorn acquired`);
            }}
            alt="test"
          />
        </map>
        {toggleMenu && (
          <DropDownMenu
            coordinates={coordinates}
            activeMenu={activeMenu}
            itemList={[`Unicorn`, `Robot`, `Panda`]}
          />
        )}
      </div>
    </div>
  );
};

export default Image2;

// const image2 = document.querySelector('.image2')
// image2.onclick = function(e){
//   let x = e.pageX; console.log("X: " + e.offsetX + "Y: " + e.offsetY )}
