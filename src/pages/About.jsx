import React from 'react';
import Cover from '../assets/images/about/cover.jpg';
import AboutPhoto from '../assets/images/about/about.jpg';
import Takazoku from '../assets/images/assets/takazoku.png';
import Literasi from '../assets/images/assets/literasi.png';
import FotoPerpisahan from '../assets/images/activities/perpisahan.jpg';

const About = () => {
  return (
    <main className="font-sans">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white py-20 md:py-44 text-center"
        style={{ backgroundImage: `url(${Cover})` }}
      >
        {/* Gradasi dari putih ke transparan */}
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>

        {/* Konten di atas gradasi */}
      </section>

      <section>
        <div className="h-20"></div>
        <div className="flex flex-col justify-center items-center md:border-x-[200px] border-x-[50px] border-amber-400">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Tentang Takazoku
          </h1>
          <p className="text-lg text-center md:text-xl italic text-gray-700 px-5">
            Nihon Club SMK Negeri 46 Jakarta
          </p>
        </div>
        <div className="h-20"></div>
      </section>

      {/* Sejarah Singkat */}
      <section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 md:pb-32 pt-16 pb-16 gap-10">
        <div className="w-full md:w-1/2">
          <img
            src={AboutPhoto}
            className="w-full md:w-[90%] rounded-xl shadow"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Sejarah Singkat
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed text-left">
            Takazoku dibentuk pada bulan ***** 2024. Fokus Ekstrakurikuler Nihon
            Club Takazoku adalah memperkenalkan dan menumbuhkan minat siswa
            terhadap bahasa serta budaya Jepang melalui kegiatan yang
            menyenangkan dan edukatif.
          </p>
        </div>
      </section>

      {/* Makna Nama */}
      <section className="bg-amber-400 py-20 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Makna Nama "Takazoku"
        </h2>
        <p className="text-black text-lg max-w-2xl mx-auto text-left md:text-center leading-relaxed">
          Nama "Takazoku" berasal dari gabungan kata Jepang{' '}
          <strong>“Takara”</strong> yang berarti harta karun dan{' '}
          <strong>“Kazoku”</strong> yang berarti keluarga. Filosofi ini
          mencerminkan bahwa setiap anggota klub adalah bagian dari keluarga
          yang berharga seperti harta karun, dan saling mendukung serta tumbuh
          bersama.
        </p>
      </section>

      {/* Hubungan dengan Ekskul Literasi */}
      <section className="pt-20 pb-12 md:pb-20 px-6 md:px-10 text-center flex flex-col md:flex-row items-center justify-center">
        <div className="hidden md:block">
          <img src={Literasi} alt="" className="w-[180px]" />
        </div>
        <div className="px-5">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Bagian dari Ekskul Literasi
          </h2>
          <div className="flex md:hidden justify-center items-center gap-6 mb-4">
            <img
              src={Literasi}
              alt="Logo Literasi"
              className="h-[100px] object-contain"
            />
            <img
              src={Takazoku}
              alt="Logo Takazoku"
              className="h-[110px] object-contain"
            />
          </div>
          <p className="text-gray-600 text-left md:text-center text-lg max-w-3xl md:mx-auto leading-relaxed">
            <span className="font-bold">Takazoku</span> adalah bagian dari
            <span className="font-bold"> Ekskul Literasi</span>. Literasi adalah
            Ekskul di SMKN 46 Jakarta yang bertujuan untuk meningkatkan minat
            dan kemampuan berliterasi, serta mengasah kreativitas siswa.{' '}
            <span className="font-bold">Literasi</span> dibagi menjadi dua
            Ekskul, yaitu <span className="font-bold">English Club</span> dan{' '}
            <span className="font-bold">Japanese Club</span>.
          </p>
        </div>
        <div className="hidden md:block">
          <img src={Takazoku} alt="" className="w-[200px]" />
        </div>
      </section>

      {/* Visi dan Misi */}
      <section className="pb-28 pt-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
          Visi & Misi Takazoku
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Visi */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border-l-4 border-amber-400">
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-semibold text-gray-800">Visi</h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Menjadi komunitas yang aktif dan kreatif dalam mengenalkan budaya
              Jepang di lingkungan sekolah.
            </p>
          </div>

          {/* Misi */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border-l-4 border-amber-400">
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-semibold text-gray-800">Misi</h3>
            </div>
            <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed space-y-2">
              <li>
                Meningkatkan minat siswa terhadap bahasa dan budaya Jepang.
              </li>
              <li>
                Menyelenggarakan kegiatan edukatif dan budaya secara rutin.
              </li>
              <li>
                Menumbuhkan semangat kerja sama, kreativitas, dan rasa
                kekeluargaan antar anggota.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
