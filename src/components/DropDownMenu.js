const DropDownMenu = (props) => {
  return (
    <div
      className="dropdown"
      style={{
        top: `${props.coordinates.y}px`,
        left: `${props.coordinates.x}px`,
      }}
    >
      Hello
    </div>
  );
};

export default DropDownMenu;
