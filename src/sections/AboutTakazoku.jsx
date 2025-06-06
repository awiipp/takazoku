export default function AboutTakazoku() {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-white">
      {/* Kanan - Teks & Tombol */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          About Takazoku
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
          vestibulum quam, ut hendrerit magna.
        </p>
        <button className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition duration-300">
          Get Started
        </button>
      </div>

      {/* Kiri - Gambar (kosong dulu) */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0">
        <div className="w-full h-64 md:h-96 bg-gray-200 rounded-xl flex items-center justify-center">
          <span className="text-gray-400">[Insert Image Here]</span>
        </div>
      </div>
    </section>
  );
}
