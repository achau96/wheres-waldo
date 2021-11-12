import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div className="nav">
      <div>
        <Link to="/">Logo</Link>
      </div>
      <div className="signup">Fake Sign Up</div>
    </div>
  );
};

export default NavBar;
