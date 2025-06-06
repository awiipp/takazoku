import React from 'react';
import Jadwal from '../assets/images/home/jadwal.jpg';

export default function JadwalCard() {
  return (
    <section className="bg-white px-6 md:px-20 md:pt-10 pt-20 pb-28 max-w-4xl mx-auto">
      {/* Judul di mobile */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6 md:hidden text-center">
        Jadwal Ekskul Takazoku
      </h2>

      <div className="hidden md:flex rounded-xl overflow-hidden shadow-lg max-h-[280px] max-w-full mx-auto">
        {/* Foto */}
        <div className="w-1/2 border-8 bg-amber-300 border-amber-300">
          <img
            src={Jadwal}
            alt="Foto Ekskul Takazoku"
            className="h-full w-full object-cover rounded-l-lg"
          />
        </div>

        {/* Isi jadwal */}
        <div className="w-1/2 p-10 flex flex-col justify-center bg-gradient-to-l from-amber-100 to-amber-300 text-gray-900">
          {/* Judul di desktop */}
          <h2 className="text-3xl font-bold mb-4">Jadwal Ekskul Takazoku</h2>
          <p className="mb-2">
            <span className="font-semibold text-red-800">Hari:</span> Kamis
          </p>
          <p className="mb-2">
            <span className="font-semibold text-red-800">Waktu:</span> 15:30 –
            17:00 WIB
          </p>
          <p>
            <span className="font-semibold text-red-800">Tempat:</span> Ruang
            Literasi, SMKN 46 Jakarta
          </p>
        </div>
      </div>

      {/* Versi mobile */}
      <div className="md:hidden rounded-xl overflow-hidden shadow-lg max-w-full mx-auto">
        {/* Judul di mobile sudah di atas, jadi gak usah di sini */}
        <div className="w-full border-8 bg-amber-300 border-amber-300">
          <img
            src={Jadwal}
            alt="Foto Ekskul Takazoku"
            className="h-full w-full object-cover rounded-t-lg"
          />
        </div>
        <div className="p-6 bg-gradient-to-t from-amber-100 to-amber-300 text-gray-900">
          <p className="mb-2 text-xl">
            <span className="font-semibold text-red-800">Hari:</span> Kamis
          </p>
          <p className="mb-2 text-xl">
            <span className="font-semibold text-red-800">Waktu:</span> 15:30 –
            17:00 WIB
          </p>
          <p className="text-xl">
            <span className="font-semibold text-red-800">Tempat:</span> SMKN 46
            Jakarta
          </p>
        </div>
      </div>
    </section>
  );
}
