import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner ">
      <div className="text-xl  h-full w-full bg-opacity-20 text-white bg-black">
        <div className="">
          <p className="pt-10 text-yellow-500 text-center">
            Hight Quality Test Station
          </p>
          <p className="my-5 md:text-5xl text-center md:pl-5 px-3 md:px-0 text-2xl font-semibold font-mono text-slate-100">
            Welcome to Bangaliana Resturent
          </p>
          <p className="text-center md:pl-5 px-3 md:px-0 md:text-4xl text-slate-100 font-bold font-mono">
            Bengali Culinary House
          </p>

          <p className="text-center md:w-1/2 mx-auto font-sans text-slate-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <span className="md:block hidden font-sans">
              Nostrum voluptatem qui distinctio non cum aperiam quo consequatur
              quisquam, sint ex enim vel, amet dolores architecto consequuntur
              optio eum, similique quos!
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
