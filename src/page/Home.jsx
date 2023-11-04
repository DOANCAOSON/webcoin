import HomeIndex from "../component/home/HomeIndex";
import myImage from '../assets/img/logo.png';
import Sharehome from "../component/home/Sharehome";
import Support from "../component/home/Support";

const Home = () => {

  return (
    <>
    <HomeIndex myImage={myImage}/>
    <Sharehome />
    <Support/>
    </>
  );
};

export default Home;
