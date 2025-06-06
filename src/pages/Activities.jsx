import React from 'react';
import { Link } from 'react-router-dom';
import { ActivitiesData } from '../data/ActivitiesData';

const Activities = () => {
  const featured = ActivitiesData[0]; // card besar
  const others = ActivitiesData.slice(1); // card biasa

  return (
    <main className="px-6 md:px-20 pb-12 pt-28 font-sans">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800 text-center">
        Kegiatan Takazoku
      </h1>

      {/* Card besar - hanya tampil di md ke atas */}
      <div className="hidden md:block mb-12">
        <div
          className="flex bg-neutral-200 rounded-xl overflow-hidden hover:bg-neutral-300 transition"
          data-aos="fade-in"
        >
          <img
            src={featured.image}
            alt={featured.title}
            className="w-1/2 h-80 object-cover"
          />
          <div className="p-10 w-1/2 flex flex-col justify-between items-center bg-gradient-to-br from-amber-200 via-white to-amber-200">
            <div className="">
              <div className="flex items-center mb-2 gap-2">
                <p className="bg-amber-400 px-3 py-0.5 font-semibold text-sm rounded-md">
                  📌 Pin
                </p>
                <p className="bg-amber-400 px-3 py-0.5 font-semibold text-sm rounded-md">
                  {featured.category}
                </p>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {featured.title}
              </h2>
              <p className="text-gray-800 font-medium mb-2">
                {featured.excerpt}
              </p>
              <p className="text-gray-700 font-medium">{featured.date}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Semua card termasuk featured - di mobile */}
      <div className="block md:hidden px-5">
        {ActivitiesData.map((activity) => (
          <div
            data-aos="fade-up"
            key={activity.id}
            className="block bg-gradient-to-br from-amber-200 via-white to-amber-200 w-full px-4 py-4 rounded-lg mb-6 transition"
          >
            <div className="flex justify-between items-center mb-2">
              <p className="bg-amber-400 px-3 py-0.5 font-semibold text-sm rounded-md">
                {activity.category}
              </p>
            </div>
            <img
              src={activity.image}
              alt={activity.title}
              className="rounded-lg w-full mb-3"
            />
            <p className="font-bold text-xl mb-1 text-gray-900">
              {activity.title}
            </p>
            <p className="font-medium text-gray-700">{activity.date}</p>
          </div>
        ))}
      </div>

      {/* Card biasa - 3 kolom di desktop */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {others.map((activity) => (
          <div
            key={activity.id}
            data-aos="fade-up"
            className="bg-gradient-to-br from-amber-200 via-white to-amber-200  w-full max-w-md px-4 py-4 rounded-lg hover:transform transition"
          >
            <div className="flex mb-2 justify-between items-center">
              <p className="mr-1 bg-amber-400 px-3 py-0.5 font-semibold text-sm rounded-md">
                {activity.category}
              </p>
            </div>

            <img
              src={activity.image}
              alt={activity.title}
              className="rounded-lg w-full mb-3"
            />

            <p className="font-bold text-xl mb-1 text-gray-900">
              {activity.title}
            </p>
            <p className="font-medium text-gray-700">{activity.date}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Activities;
