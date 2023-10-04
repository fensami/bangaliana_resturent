import FromOurMenu from "../FromOurMenu/FromOurMenu";
import MasterChefs from "../MasterChefs/MasterChefs";
import SpecialMenu from "../SpecialMenu/SpecialMenu";
import TodaysMenu from "../TodaysMenu/TodaysMenu";
import Banner from "../banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SpecialMenu></SpecialMenu>
      <FromOurMenu></FromOurMenu>
      <MasterChefs></MasterChefs>
      <TodaysMenu></TodaysMenu>

    
      
    </div>
  );
};

export default Home;