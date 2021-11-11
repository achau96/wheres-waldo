const DropDownMenu = (props) => {
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
            console.log(props.itemList[0]);
            props.activeMenu();
            console.log(props.itemStatus);
          }}
        >
          {props.itemList[0]}
        </li>
        <li
          className="dropItem"
          onClick={() => {
            console.log(props.itemList[1]);
            props.activeMenu();
            console.log(props.itemStatus);
          }}
        >
          {props.itemList[1]}
        </li>
        <li
          className="dropItem"
          onClick={() => {
            console.log(props.itemList[2]);
            props.activeMenu();
          }}
        >
          {props.itemList[2]}
        </li>
      </ul>
    </div>
  );
};

export default DropDownMenu;
