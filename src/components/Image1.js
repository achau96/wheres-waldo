import React, { useEffect, useState } from 'react';
import image1 from './hiddenobject.png';
import cube from './image1pics/cube.png';
import toaster from './image1pics/toaster.png';
import planet from './image1pics/planet.png';
import DropDownMenu from './DropDownMenu';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase';

const Image1 = () => {
  const [winStatus, setWinStatus] = useState(false);
  const [currentItem, setCurrentItem] = useState(undefined);
  const [time, setTime] = useState(0);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [toggleMenu, setMenu] = useState(false);
  const [itemCoords, setItemCoords] = useState({});
  const [itemStatus, setItemStatus] = useState({
    toaster: false,
    planet: false,
    cube: false,
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
        if (doc.id === `2vEUTXOfMH8kutrFfoog`) {
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
        Find these 3 objects: Cube:{' '}
        <img className="smallImg" src={cube} alt="cube" />
        Toaster: <img className="smallImg" src={toaster} alt="toaster" />
        Planet: <img className="smallImg" src={planet} alt="planet" />
      </div>
      <div>
        <img
          src={image1}
          className="image1 cursor"
          alt="image1"
          useMap="#testmap"
          onClick={(e) => {
            return !winStatus ? clickHandler(e, undefined) : null;
          }}
        />
        <map name="testmap">
          <area
            shape="rect"
            className="image1 cursor"
            coords={itemCoords[`toaster`]}
            onClick={(e) => {
              return !winStatus ? clickHandler(e, 'toaster') : null;
            }}
            alt="test"
          />
          <area
            shape="rect"
            className="image1 cursor"
            coords={itemCoords[`planet`]}
            onClick={(e) => {
              return !winStatus ? clickHandler(e, 'planet') : null;
            }}
            alt="test"
          />
          <area
            shape="rect"
            className="image1 cursor"
            coords={itemCoords[`cube`]}
            onClick={(e) => {
              return !winStatus ? clickHandler(e, 'cube') : null;
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
            itemList={[`toaster`, `cube`, `planet`]}
          />
        )}
      </div>
    </div>
  );
};

export default Image1;

// function to get x and y coordinate of image
// const image1 = document.querySelector('.image1');
// image1.onclick = function (e) {
//   let x = e.pageX;
//   console.log('X: ' + e.offsetX + 'Y: ' + e.offsetY);
// };
