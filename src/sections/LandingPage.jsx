import React from 'react';
import Logo from '../assets/images/assets/takazoku.png';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <section
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="400"
      data-aos-offset="0"
      className="md:min-h-screen pt-[7rem] md:pt-28 pb-24 md:pb-0 bg-gradient-to-br from-amber-400 via-white to-white px-6"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between md:gap-0 max-w-[1100px] mx-auto">
        {/* Teks */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <span className="hidden md:inline-block bg-amber-200 text-amber-800 text-sm font-semibold px-4 py-1 rounded-full">
            Japanese Club
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Selamat Datang di Takazoku
          </h1>
          <p className="text-gray-600 text-lg max-w-xl">
            Ekskul Japanese Club SMKN 46 Jakarta yang aktif, kreatif, dan penuh
            semangat dalam mengenal budaya Jepang!
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="/about"
              className="px-6 py-3 bg-amber-400 hover:bg-amber-500 text-white font-semibold rounded-xl transition duration-300"
            >
              Tentang Kami
            </a>
          </div>
        </div>

        {/* Gambar */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-10 md:mb-0">
          <div className="rounded-3xl overflow-hidden w-[80%] md:w-[80%]">
            <img
              src={Logo}
              alt="Kegiatan Takazoku"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
