import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import CardThree from "./CardThree";
import CardFour from "./CardFour";
import Title from "../../../utils/Title";

const QualityServices = () => {
  return (
    <div className="py-5 bg-slate-100">
      <Title title="Quality Services"></Title>

      <div className="relative gap-2 md:gap-0 md:-bottom-28 mx-10 grid-cols-1 grid md:grid-cols-4">
        <CardOne></CardOne>
        <CardTwo></CardTwo>
        <CardThree></CardThree>
        <CardFour></CardFour>
      </div>
    </div>
  );
};

export default QualityServices;
