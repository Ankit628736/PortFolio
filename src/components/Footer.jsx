import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
function Footer() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-gray-400 items-center">
        {/* first div */}
        <div className="m-4 md:ml-16">
          <div className="text-2xl">Contact Information</div>
          <div>
            <pre className="text-[15px] mx-8">
              Name : Ankit Raj <br />
              Email : singh.ankit9871@gmail.com <br />
              Phone : 6287361885 <br />
            </pre>
          </div>
        </div>
        {/* Second dev */}
        <div className="m-4 mr-8">
          <div className="text-xl">Google Maps</div>
          <div className="responsive-map ml-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.7263993671354!2d75.70256857505855!3d31.25599656015716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5f5e9c489cf3%3A0x4049a5409d53c300!2sLovely%20Professional%20University!5e0!3m2!1sen!2sin!4v1720346534701!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        </div>
      </div>
      <hr />
      <footer className="py-12 bg-gray-400">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <FaFacebook size={24} />
              <FaTwitter size={24} />
              <FaInstagram size={24} />
              <FaLinkedinIn size={24} />
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 Your Company. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
