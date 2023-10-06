import FromOurMenu from "../FromOurMenu/FromOurMenu";
import MasterChefs from "../MasterChefs/MasterChefs";
import NewsBlog from "../NewsBlog/NewsBlog";
import QualityServices from "../QualityServices/QualityServices";
import Reservation from "../Reservation/Reservation";
import SpecialMenu from "../SpecialMenu/SpecialMenu";
import TodaysMenu from "../TodaysMenu/TodaysMenu";
import Banner from "../banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SpecialMenu></SpecialMenu>
      <MasterChefs></MasterChefs>
      <TodaysMenu></TodaysMenu>
      <QualityServices></QualityServices>
      {/* <Reservation></Reservation> */}
      <FromOurMenu></FromOurMenu>
      <NewsBlog></NewsBlog>

    
      
    </div>
  );
};

export default Home;