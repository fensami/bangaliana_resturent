import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import CardThree from "./CardThree";
import CardFour from "./CardFour";

const QualityServices = () => {
  return (
    <div className="py-5 bg-slate-100">
      <h1 className="md:text-5xl font-bold text-center mt-10 text-4xl mb-7 md:mb-0 text-[#028a3a] alltext-shadow ">
        Quality Services
      </h1>

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
