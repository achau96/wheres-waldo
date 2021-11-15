const DropDownMenu = (props) => {
  const clickHandler = (item, activeItem) => {
    props.activeMenu();
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
          className={`dropItem ${
            props.itemStatus[props.itemList[0]] ? 'line' : null
          }`}
          onClick={() => {
            return !props.itemStatus[props.itemList[0]]
              ? clickHandler(props.itemList[0], props.currentItem)
              : null;
          }}
        >
          {props.itemList[0]}
        </li>
        <li
          className={`dropItem ${
            props.itemStatus[props.itemList[1]] ? 'line' : null
          }`}
          onClick={() => {
            return !props.itemStatus[props.itemList[1]]
              ? clickHandler(props.itemList[1], props.currentItem)
              : null;
          }}
        >
          {props.itemList[1]}
        </li>
        <li
          className={`dropItem ${
            props.itemStatus[props.itemList[2]] ? 'line' : null
          }`}
          onClick={() => {
            return !props.itemStatus[props.itemList[2]]
              ? clickHandler(props.itemList[2], props.currentItem)
              : null;
          }}
        >
          {props.itemList[2]}
        </li>
      </ul>
    </div>
  );
};

export default DropDownMenu;
