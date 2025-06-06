import React from 'react';
import takazokuLogo from '../assets/images/assets/takazoku.png';

const Footer = () => {
  return (
    <footer className="bg-amber-400 text-neutral-900 font-sans px-6 md:px-20 pt-12 pb-6">
      <div className="flex flex-col md:flex-row md:justify-between gap-10">
        {/* Logo & Nama */}
        <div className="md:w-4/12 flex items-center md:space-x-4 space-x-2">
          <img
            src={takazokuLogo}
            alt="Takazoku Logo"
            className="md:w-24 md:h-24 w-16 h-16 object-contain"
          />
          <span className="text-3xl md:text-4xl font-bold text-red-700">
            Takazoku
          </span>
        </div>

        {/* Navigasi */}
        <div className="flex-1">
          <h2 className="text-black font-semibold text-xl mb-2">Navigasi</h2>
          <ul>
            <li className="mb-1">
              <a
                href="/"
                className="hover:text-red-700 font-medium duration-300"
              >
                Beranda
              </a>
            </li>
            <li className="mb-1">
              <a
                href="/about"
                className="hover:text-red-700 font-medium duration-300"
              >
                Tentang
              </a>
            </li>
            <li className="mb-1">
              <a
                href="/activities"
                className="hover:text-red-700 font-medium duration-300"
              >
                Aktivitas
              </a>
            </li>
          </ul>
        </div>

        {/* Media Sosial */}
        <div className="flex-1">
          <h2 className="text-black font-semibold text-xl mb-2">Ikuti Kami</h2>
          <p className="text-black">Ikuti kami di Instagram!</p>
          <ul>
            <li className="mb-1">
              <a
                href="https://instagram.com/nihon.kurabu46"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-700 font-medium duration-300"
              >
                @nihon.kurabu46
              </a>
            </li>
          </ul>
        </div>

        {/* Afiliasi */}
        <div className="flex-1">
          <h2 className="text-black font-semibold text-xl mb-2">Bagian dari</h2>
          <ul>
            <li className="mb-1">
              <a
                href="https://instagram.com/lliterasi.46"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-700 font-medium duration-300"
              >
                Ekstrakurikuler Literasi
              </a>
            </li>
            <li className="mb-1">
              <a
                href="https://www.smkn46jaktim.sch.id/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-700 font-medium duration-300"
              >
                SMK Negeri 46 Jakarta
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-center text-sm mt-12 font-medium">
        ©2025 Takazoku | Japanese Club SMKN 46 Jakarta
      </p>
    </footer>
  );
};

export default Footer;
