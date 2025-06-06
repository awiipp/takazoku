import React from 'react';
import TopPhoto from '../assets/images/home/activity-1.jpg';
import LeftPhoto from '../assets/images/home/activity-21.jpg';
import RightPhoto from '../assets/images/home/activity-22.jpg';

const HomeImage = () => {
  return (
    <section className="md:min-h-screen flex flex-col md:flex-row items-center md:justify-between px-7 md:px-6 md:pr-20 md:pl-28 md:py-16 md:gap-12">
      <div className="md:w-1/2 w-full flex flex-col gap-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center inline md:hidden">
          Kegiatan Kami
        </h2>
        <div className="h-52 md:h-64 rounded-t-xl overflow-hidden shadow-md hover:p-1 duration-300">
          <img
            src={TopPhoto}
            alt="Kegiatan Takazoku"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex gap-4">
          <div className="w-1/2 h-32 md:h-48 rounded-bl-xl overflow-hidden shadow-md hover:p-1 duration-300">
            <img
              src={LeftPhoto}
              alt="Kegiatan Takazoku"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2 h-32 md:h-48 rounded-br-xl overflow-hidden shadow-md hover:p-1 duration-300">
            <img
              src={RightPhoto}
              alt="Kegiatan Takazoku"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="md:w-1/2 md:text-left text-center mt-10 md:mt-0 mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 hidden md:inlne">
          Kegiatan Kami
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          Takazoku aktif mengadakan berbagai pembelajaran budaya dan bahasa
          Jepang. Penasaran apa aja kegiatan kami? Yuk, klik tombol di bawah!
        </p>

        <a
          href="/activities"
          className="px-6 py-3 bg-amber-400 hover:bg-amber-600 text-white font-semibold rounded-xl transition duration-300"
        >
          Aktivitas
        </a>
      </div>
    </section>
  );
};

export default HomeImage;
