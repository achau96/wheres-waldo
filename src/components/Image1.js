import image1 from './hiddenobject.png';

const Image1 = () => {
  return (
    <div className="image">
      <div>This is where image 1 will go</div>
      <div>
        <img src={image1} className="image1" alt="image1" useMap="#testmap" />
        <map name="testmap">
          <area
            shape="rect"
            coords="645,336,676,371"
            onClick={() => console.log('this is toaster')}
            href="#"
            alt="test"
          />
        </map>
      </div>
    </div>
  );
};

export default Image1;

//function to get x and y coordinate of image
// const image1 = document.querySelector('.image1')
// image1.onclick = function(e){
//   let x = e.pageX; console.log("X: " + e.offsetX + "Y: " + e.offsetY )}
