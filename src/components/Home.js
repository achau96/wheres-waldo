import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      This is the home page
      <div>
        <Link to="/image1">Image 1</Link>
      </div>
      <div>
        <Link to="/image2">Image 2</Link>
      </div>
    </div>
  );
};

export default Home;
