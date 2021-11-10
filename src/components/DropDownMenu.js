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
        <li onClick={() => console.log('toaster')}>Toaster</li>
        <li>Rubik's Cube</li>
        <li>Etc</li>
      </ul>
    </div>
  );
};

export default DropDownMenu;
