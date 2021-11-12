import React, { useEffect, useState } from 'react';
import image2 from './hiddenobject2.jpeg';
import DropDownMenu from './DropDownMenu';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase';

const Image2 = () => {
  const [winStatus, setWinStatus] = useState(false);
  const [currentItem, setCurrentItem] = useState(undefined);
  const [time, setTime] = useState(0);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [toggleMenu, setMenu] = useState(false);
  const [itemCoords, setItemCoords] = useState({});
  const [itemStatus, setItemStatus] = useState({
    unicorn: false,
    panda: false,
    robot: false,
  });

  const _onMouseMove = (e) => {
    setCoordinates((prevState) => {
      return { x: e.pageX, y: e.pageY };
    });
  };

  const activeMenu = () => {
    setMenu((prevState) => !prevState);
  };

  useEffect(() => {
    const startCount = () =>
      setInterval(() => setTime((prevState) => prevState + 1), 1000);
    startCount();
    return () => clearInterval(startCount);
  }, []);

  //upload coordinates from database
  useEffect(() => {
    async function uploadCoords() {
      const querySnapshot = await getDocs(collection(db, 'coordinates'));
      querySnapshot.forEach((doc) => {
        if (doc.id === `8EnNjYfKIk6QeyM0LhOT`) {
          setItemCoords(doc.data());
        }
      });
    }
    uploadCoords();
  }, []);

  const clickHandler = (e, object) => {
    //set the itemstatus to true
    //check if all items are true, if true set win to true and stop timer
    //if not continue on with program
    e.preventDefault();
    _onMouseMove(e);
    setMenu((prevState) => !prevState);
    setCurrentItem(object);
  };

  const handleItemUpdate = (object) => {
    setItemStatus({ ...itemStatus, [object]: true });
  };

  return (
    <div className="image">
      <div className="timer">
        Time Elapsed: {new Date(time * 1000).toISOString().substr(11, 8)}
      </div>
      <div>
        Find these 3 objects:
        {/* <img className="smallImg" src={robot} alt="robot" />
        unicorn: <img className="smallImg" src={unicorn} alt="unicorn" />
        panda: <img className="smallImg" src={panda} alt="panda" /> */}
      </div>
      <div>
        <img
          src={image2}
          className="image2 cursor"
          alt="image2"
          useMap="#testmap"
          onClick={(e) => {
            return !winStatus ? clickHandler(e, undefined) : null;
          }}
        />
        <map name="testmap">
          <area
            shape="rect"
            className="image2 cursor"
            coords={itemCoords[`unicorn`]}
            onClick={(e) => {
              return !winStatus ? clickHandler(e, 'unicorn') : null;
            }}
            alt="test"
          />
          <area
            shape="rect"
            className="image2 cursor"
            coords={itemCoords[`panda`]}
            onClick={(e) => {
              return !winStatus ? clickHandler(e, 'panda') : null;
            }}
            alt="test"
          />
          <area
            shape="rect"
            className="image2
             cursor"
            coords={itemCoords[`robot`]}
            onClick={(e) => {
              return !winStatus ? clickHandler(e, 'robot') : null;
            }}
            alt="test"
          />
        </map>
        {toggleMenu && (
          <DropDownMenu
            coordinates={coordinates}
            activeMenu={activeMenu}
            itemStatus={itemStatus}
            currentItem={currentItem}
            handleItemUpdate={handleItemUpdate}
            itemList={[`unicorn`, `robot`, `panda`]}
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
