import React from "react";
import { FaGoogle, FaFacebook, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'

const Rightside = () => {
  return (
    <div className="border rounded-lg shadow-lg">
      <div className="p-6 space-y-4 mb-6">
        <h2 className="text-2xl font-semibold text-center">Login With</h2>

        {/* Google Sign-In Button */}
        <button className="flex items-center justify-center space-x-2 py-3 px-4 border border-gray-300 rounded-lg w-full bg-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300">
          <FaGoogle className="text-red-500" />
          <span className="font-medium text-gray-700">Sign in with Google</span>
        </button>

        {/* GitHub Sign-In Button */}
        <button className="flex items-center justify-center space-x-2 py-3 px-4 border border-gray-800 rounded-lg w-full bg-gray-800 hover:bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
          <FaGithub />
          <span className="font-medium">Sign in with GitHub</span>
        </button>
      </div>

{/* for find us button */}

      <div className="p-5 space-y-2 mb-6  rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-white">
          Find Us On
        </h2>

        <a
          href="#"
          className="flex items-center p-3 bg-white-600 text-white rounded-tr-lg  hover:bg-blue-700 transition"
        >
          <FaFacebook className="mr-3 text-xl" />
          <span>Facebook</span>
        </a>
        <a
          href="#"
          className="flex items-center p-3 mt-0 bg-white-600 text-white rounded-tr-lg  hover:bg-blue-700 transition"
        >
          <FaTwitter className="mr-3 text-xl" />
          <span>Twitter</span>
        </a>
        <a
          href="#"
          className="flex items-center p-3 bg-white-600 text-white rounded-tr-lg  hover:bg-blue-700 transition"
        >
          <FaInstagram className="mr-3 text-xl" />
          <span>Instagram</span>
        </a>
      </div>



      {/* for Q-Zone */}

      <div className="p-6 space-y-4 mb-6">
        <h2 className="text-2xl font-semibold text-center"> Q-Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />

       

       
      </div>



    </div>
  );
};

export default Rightside;
