"use client";

import React, { useState } from "react";

export default function TopBarOperator() {
  //untuk mengontrol buka/tutup menu dropdown
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full min-h-[90px] sm:min-h-[110px] md:min-h-[120px] bg-[#4696E0] flex items-center justify-between px-4 sm:px-8 md:px-12 py-3 sm:py-4 shadow-md">
      {/* sisi kiri*/}
      <div className="flex items-center gap-3 sm:gap-6">
        {/* lingkaran kiri */}
        <div className="w-[52px] h-[52px] sm:w-[70px] sm:h-[70px] md:w-[85px] md:h-[85px] rounded-full bg-white shrink-0 shadow-sm" />
        
        {/* teks header Dukcapil */}
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

      {/* sisi kanan*/}
      <div className="relative">
        <div className="flex items-center gap-3 sm:gap-4 focus:outline-none">
          {/* lingkaran kanan*/}
          <div className="w-[33px] h-[33px] sm:w-[51px] sm:h-[51px] md:w-[66px] md:h-[66px] rounded-full bg-white shrink-0 shadow-sm">
            <svg
              className="w-full h-full text-gray-400 p-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
            </svg>
          </div>

          {/*nama akun dan jenis akun yang harusnya bisa berubah sesuai akun yang dipakai login*/}
          <div className="flex flex-col text-left text-white">
            <span className="font-bold text-sm sm:text-base md:text-lg tracking-wide leading-snug">
              I Made Gunawan
            </span>
            <span className="text-[11px] sm:text-xs md:text-sm font-normal text-white/90 leading-snug">
              Petugas Pelayanan
            </span>
          </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-3 sm:gap-4 focus:outline-none cursor-pointer group"
        >
          {/* ikon dropdown */}
          <div className="text-white ml-1">
            <svg
              className={`w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>

        {/* menu dropdown yang muncul*/}
        {isOpen && (
          <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 text-gray-700">
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
              Profil Saya
            </a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
              Pengaturan Akun
            </a>
            <hr className="my-1 border-gray-200" />
            <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
              Keluar (Logout)
            </a>
          </div>
        )}
        </div>
      </div>
    </header>
  );
}