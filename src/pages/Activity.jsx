import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ActivitiesData } from '../data/ActivitiesData';

const Activity = () => {
  const { slug } = useParams();
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    const found = ActivitiesData.find((item) => item.slug === slug);
    setActivity(found);
  }, [slug]);

  if (!activity) {
    return (
      <main className="pt-32 pb-20 flex flex-col items-center justify-center text-center text-gray-700 min-h-[70vh]">
        <h2 className="text-2xl font-semibold mb-2">
          Aktivitas tidak ditemukan
        </h2>
        <p className="mb-6 text-gray-500 max-w-md">
          Maaf, sepertinya aktivitas yang kamu cari tidak tersedia atau mungkin
          sudah dihapus.
        </p>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-6 md:px-0 pb-28 pt-28 font-sans">
      <article className="mb-8">
        <h1 className="md:text-5xl text-4xl font-bold text-gray-800 mb-4">
          {activity.title}
        </h1>

        <p className="text-lg font-medium text-gray-500 mb-6">
          {activity.date}
        </p>

        <img
          src={activity.image}
          alt={activity.title}
          className="w-full h-60 md:h-[500px] object-cover rounded-none shadow-none mb-8"
        />

        <section className="text-gray-700 space-y-6 leading-relaxed text-lg">
          {activity.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>
      </article>
      <a
        href="/activities"
        className="bg-amber-400 hover:bg-amber-500 transition-colors duration-300 px-4 py-2 font-semibold text-base rounded-md text-gray-900 shadow"
      >
        Kembali
      </a>
    </main>
  );
};

export default Activity;
