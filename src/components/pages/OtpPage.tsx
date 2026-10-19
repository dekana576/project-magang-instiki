"use client";

import React, { useRef, useEffect } from "react";
import TopBar from "@/components/fragments/TopBar";

export default function OtpPage() {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Langsung fokus ke kotak pertama baru masuk
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  // Pindah otomatis ke kotak berikutnya saat angka diketik
  const handleInput = (index: number, e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    // Hanya ambil angka (0-9)
    const numericValue = value.replace(/[^0-9]/g, "");
    e.currentTarget.value = numericValue;

    if (numericValue && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Kembali otomatis ke kotak sebelumnya saat tekan Backspace
  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top Bar */}
      <TopBar />

      {/* Konten OTP */}
      <main className="flex-1 flex flex-col py-[13px] px-[3px]">
        <div className="w-full max-w-[98%] mx-auto flex-1 bg-white rounded-xl border border-zinc-200 shadow-sm py-24 px-6 sm:px-12 flex flex-col items-center justify-center text-center">

          {/* Judul */}
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-800 tracking-tight mb-4">
            Masukkan Kode OTP
          </h1>

          {/* Deskripsi */}
          <p className="text-sm sm:text-base text-zinc-500 leading-relaxed mb-8 max-w-xl">
            Kode OTP telah dikirim melalui Whatsapp
            <br />
            <span className="sm:whitespace-nowrap">
              Tolong masukkan kode OTP untuk melanjutkan proses login anda
            </span>
          </p>

          {/* Form OTP */}
          <form className="flex flex-col items-center w-full max-w-sm">
            {/* Input Kotak OTP */}
            <div className="grid grid-cols-6 gap-2 sm:gap-2.5 w-full mb-4 sm:mb-5">
              {[...Array(6)].map((_, index) => (
                <input
                  key={index}
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  onInput={(e) => handleInput(index, e)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-full h-12 sm:h-14 rounded-[4px] bg-[#B0B0B0] text-center text-xl sm:text-2xl font-bold text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              ))}
            </div>

            {/* Teks Kirim Ulang (Sejajar kanan dengan OTP dan pas di tengah) */}
            <div className="w-full text-right text-xs sm:text-sm text-zinc-500 mb-4 sm:mb-5">
              Belum mendapatkan kode?{" "}
              <button
                type="button"
                className="text-[#3B82F6] hover:underline font-medium cursor-pointer"
              >
                Kirim ulang
              </button>
            </div>

            {/* Tombol Aksi */}
            <div className="w-full">
              <button
                type="button"
                className="w-full py-1.5 px-6 bg-[#4696E0] hover:bg-blue-600 text-white text-sm sm:text-base font-semibold rounded-[6px] shadow-sm transition active:scale-[0.98] cursor-pointer"
              >
                Verifikasi Kode
              </button>
            </div>
          </form>

        </div>
      </main>
    </div>
  );
}
