import Image from "next/image";
import formBgImg from "../../public/Images/formBgImg.png";
import Head from "next/head";

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>
          Contact Us | Get Personalized Guidance for Your MBBS Journey
        </title>
        <meta
          name="description"
          content="Contact us for personalized guidance on your MBBS journey. Fill out the form to get started."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="contact form, MBBS guidance, medical education, apply now"
        />
      </Head>

      <div className="w-full relative  h-[440px] mt-[50px]">
        <div className="absolute top-0  w-full h-[450px] block sm:hidden">
          <Image
            src={formBgImg}
            alt="Background image for contact form"
            className="h-full w-full object-cover"
            priority
          />
        </div>
        <div className="w-full h-[440px]   md:h-[350px] absolute top-0">
          <div className="p-4 mx-auto  bg-transparent sm:bg-[#B7FBFF]  rounded-lg sm:border sm:w-[70%] h-[450px] md:h-[350px] sm:border-gray-300 sm:shadow-lg  ">
            <div>
              <h2 className="text-[24px] lg:text-[36px]  font-semibold text-center mb-6 text-gray-700">
                Get Personalized Guidance for Your MBBS Journey
              </h2>
            </div>
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              action="#"
              method="POST"
              aria-labelledby="contact-form"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#C7183A] outline-none"
                required
                aria-label="Your Name"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#C7183A] outline-none"
                required
                aria-label="Your Email"
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Your Mobile No."
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#C7183A] outline-none"
                required
                aria-label="Your Mobile No."
              />
              <input
                type="text"
                name="city"
                placeholder="Current City"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#C7183A] outline-none"
                required
                aria-label="Current City"
              />
            </form>
            <div className="flex justify-center mt-6 w-full">
              <button
                type="submit"
                className="px-8 py-3 bg-[#C7183A] text-white font-medium rounded-md w-full lg:w-[200px]"
                aria-label="Submit your application"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
