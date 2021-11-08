import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div className="nav">
      <div>
        <Link to="/">Logo</Link>
      </div>
      <div>Something here</div>
    </div>
  );
};

export default NavBar;
