const Reservation = () => {
  return (
    <div className="mt-36">
      <form className=" bg-[url('https://d3ox4wjkl7mf3m.cloudfront.net/feed_stories/ctshKg5hgQxy6b8fYFSR9TUzxrTqJGXKkxNuUuUL.jpeg')] bg-cover bg-center bg-fixed text-white ">
        <div className="w-full h-full backdrop-blur-sm bg-black bg-opacity-30 py-20">
          <h1 className="text-center text-5xl font-bold my-5 relative">
            Reservation
          </h1>

          <div className="grid gap-10 md:grid-cols-3 grid-cols-1 md:mx-10 py-10">
            <article className="px-5">
              <input
                type="text"
                placeholder="Your Name"
                className="text-3xl font-semibold mb-3 outline-none bg-transparent placeholder-white "
              />
              <hr className="border" />
            </article>
            <article className="px-5">
              <input
                type="text"
                placeholder="Phone Number"
                className="text-3xl font-semibold mb-3 outline-none bg-transparent placeholder-white"
              />
              <hr className="border" />
            </article>

            <article className="px-5">
              <input
                type="text"
                placeholder="Your Email"
                className="text-3xl font-semibold mb-3 outline-none bg-transparent placeholder-white"
              />
              <hr className="border" />
            </article>
            <article className="px-5">
              <input
                type="text"
                placeholder="Number Of People"
                className="text-3xl font-semibold mb-3 outline-none bg-transparent placeholder-white"
              />
              <hr className="border" />
            </article>
            <article className="px-5">
              <input
                type="date"
                placeholder="Date"
                className="text-3xl font-semibold mb-3 outline-none bg-transparent placeholder-white"
              />
              <hr className="border" />
            </article>
            <article className="px-5">
              <input
                type="time"
                placeholder="Time"
                className="text-3xl font-semibold mb-3 outline-none bg-transparent placeholder-white"
              />
              <hr className="border" />
            </article>

          </div>


            <div className="flex justify-center items-center ">
              <button className="py-3 px-4 rounded-md hover:bg-[#186049] hover:duration-1000 font-semibold text-2xl bg-slate-200 text-black hover:text-slate-200 duration-1000">
                Book A Table
              </button>
            </div>


        </div>
      </form>
    </div>
  );
};

export default Reservation;
