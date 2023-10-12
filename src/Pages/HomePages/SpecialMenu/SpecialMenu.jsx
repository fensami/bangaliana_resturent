import Title from "../../../utils/Title";
import SpecialCard from "./SpecialCard";
import "./SpecialMenu.css";
const SpecialMenu = () => {
  return (
    <div className="my-10">
      {/* <h1 className="text-center font-bold text-5xl alltext-shadow  text-[#028a3a]">
        Special Menu
      </h1> */}
      <Title title="Special Menu"></Title>
      <div className="md:flex justify-center gap-10 md:mx-10 mx-3 mt-10">
        <SpecialCard></SpecialCard>
      </div>
    </div>
  );
};

export default SpecialMenu;
