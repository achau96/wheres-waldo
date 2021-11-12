const DropDownMenu = (props) => {
  const clickHandler = (item, activeItem) => {
    console.log(item);
    props.activeMenu();
    console.log(props.itemStatus);
    if (activeItem === item) {
      props.handleItemUpdate(activeItem);
    }
  };

  return (
    <div
      className="dropdown"
      style={{
        top: `${props.coordinates.y}px`,
        left: `${props.coordinates.x}px`,
      }}
    >
      <ul>
        <li
          className="dropItem"
          onClick={() => {
            clickHandler(props.itemList[0], props.currentItem);
          }}
        >
          {props.itemList[0]}
        </li>
        <li
          className="dropItem"
          onClick={() => {
            clickHandler(props.itemList[1], props.currentItem);
          }}
        >
          {props.itemList[1]}
        </li>
        <li
          className="dropItem"
          onClick={() => {
            clickHandler(props.itemList[2], props.currentItem);
          }}
        >
          {props.itemList[2]}
        </li>
      </ul>
    </div>
  );
};

export default DropDownMenu;
