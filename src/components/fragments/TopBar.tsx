export default function TopBar() {
  return (
    <header className="w-full min-h-[90px] sm:min-h-[110px] md:min-h-[120px] bg-[#4696E0] flex items-center justify-between px-4 sm:px-8 md:px-12 py-3 sm:py-4 shadow-md">
      {/* sisi kiri*/}
      <div className="flex items-center gap-3 sm:gap-6">
        {/* lingkaran kiri */}
        <div className="w-[52px] h-[52px] sm:w-[70px] sm:h-[70px] md:w-[85px] md:h-[85px] rounded-full bg-white shrink-0 shadow-sm" />
        {/* teks header Dukcapil*/}
        <div className="flex flex-col text-white">
          <h1 className="text-xs sm:text-base md:text-xl font-bold tracking-tight uppercase leading-snug">
            Pemerintah Kabupaten Tabanan
          </h1>
          <p className="text-[11px] sm:text-xs md:text-sm font-medium text-white/90 leading-snug">
            Dinas Kependudukan dan Pencatatan Sipil Kabupaten Tabanan
          </p>
          <p className="text-[9px] sm:text-[11px] md:text-xs text-white/80 mt-0.5 leading-snug">
            Jl. Nakula No.15, Delod Peken, Kec. Tabanan, Kabupaten Tabanan, Bali 82121
          </p>
          <p className="text-[9px] sm:text-[11px] md:text-xs text-white/80 leading-snug">
            Telp : (0361) 813542
          </p>
        </div>
      </div>

      {/* lingkaran kanan */}
      <div className="w-[52px] h-[52px] sm:w-[70px] sm:h-[70px] md:w-[85px] md:h-[85px] rounded-full bg-white shrink-0 shadow-sm" />
    </header>
  );
}