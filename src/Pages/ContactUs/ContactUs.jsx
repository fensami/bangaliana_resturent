import "./Contact.css";
import ContactCard from "./ContactCard";
const ContactUs = () => {
  return (
    <>
      <div className="bgContact mt-15">
        <div className="flex justify-center bg-black h-full bg-opacity-60 pt-15 items-center">
          <h1 className="text-white text-3xl md:text-7xl font-bold">
            Contact Us
          </h1>
        </div>
      </div>

      <div className="md:mx-10 text-white my-10">
        <ContactCard></ContactCard>

        <h1 className="text-5xl font-bold">Reservation</h1>
      </div>
    </>
  );
};

export default ContactUs;
