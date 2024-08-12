import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BrakingNews = () => {
  return (
    <div className="flex items-center bg-gray-900 text-white p-4 rounded-md shadow-lg">
      <button className="bg-red-600 text-white font-bold py-2 px-4 rounded mr-4">
        Breaking News
      </button>
      <div className="flex-1">
        <Marquee pauseOnHover={true} speed={80} gradient={false}>
          <Link to="/" className="mr-8 hover:underline">
            বাংলাদেশের ধর্মীয় সংখ্যালঘুদের নিরাপত্তায় আগামীকাল থেকে হটলাইন চালু
            করতে চায় সরকার।
          </Link>
          <Link to="/" className="mr-8 hover:underline">
            গোপালগঞ্জে সেনাবাহিনীর গাড়িতে বিক্ষোভকারীদের আগুন
          </Link>
          <Link to="/" className="mr-8 hover:underline">
            আওয়ামী লীগের কিছু কর্মী-সমর্থক যেভাবে ভারতে পালিয়েছেন
          </Link>
        </Marquee>
      </div>
    </div>
  );
};

export default BrakingNews;
