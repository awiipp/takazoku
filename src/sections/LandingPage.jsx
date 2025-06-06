import React from 'react';
import LandingImage from '../assets/images/home/landing.jpg';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen md:pt-20 pt-28 flex flex-col md:flex-row items-center md:justify-between px-6 md:px-20 py-16 bg-gradient-to-br from-amber-400 via-white to-white">
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <span className="hidden md:inline-block bg-amber-200 text-amber-800 text-sm font-semibold px-4 py-1 rounded-full">
          Japanese Club
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Selamat Datang di Takazoku
        </h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto md:mx-0">
          Ekskul Japanese Club SMKN 46 Jakarta yang aktif, kreatif, dan penuh
          semangat dalam mengenal budaya Jepang!
        </p>
        <div className="hidden md:flex justify-center md:justify-start">
          <a
            href="/about"
            className="px-6 py-3 bg-amber-400 hover:bg-amber-500 text-white font-semibold rounded-xl transition duration-300"
          >
            Tentang Kami
          </a>
        </div>
      </div>

      <div className="w-full md:w-1/2 mt-10 md:mt-0">
        <div className="rounded-3xl overflow-hidden shadow-xl w-[90%] md:mx-0 mx-auto">
          <img
            src={LandingImage}
            alt="Kegiatan Takazoku"
            className="w-full h-[80%] md:h-[80%] object-cover"
          />
        </div>
      </div>

      <div className="flex md:hidden justify-center md:justify-start mt-10">
        <a
          href="/about"
          className="px-6 py-3 bg-amber-400 hover:bg-amber-500 text-white font-semibold rounded-xl transition duration-300"
        >
          Tentang Kami
        </a>
      </div>
    </section>
  );
}
