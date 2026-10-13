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
    if (value && index < 5) {
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
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-lg flex flex-col items-center text-center">
          {/* Judul */}
          <h1 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight mb-3">
            Masukkan Kode OTP
          </h1>

          {/* Deskripsi */}
          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-md mb-8">
            Kode OTP telah dikirim melalui Email{" "}
            <span className="text-zinc-800 font-medium">satuduatigaempat@gmail.com</span>
            <br />
            Tolong masukkan kode OTP untuk melanjutkan proses login anda
          </p>

          {/* Form OTP (Bisa otomatis pindah kotak) */}
          <form className="flex flex-col items-center w-full">
            <div className="flex items-center justify-center gap-2.5 sm:gap-3.5 mb-8">
              {[...Array(6)].map((_, index) => (
                <input
                  key={index}
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                  type="text"
                  maxLength={1}
                  autoFocus={index === 0}
                  onInput={(e) => handleInput(index, e)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-10 sm:w-12 h-14 sm:h-16 rounded-[16px] sm:rounded-[20px] bg-[#B0B0B0] text-center text-xl sm:text-2xl font-bold text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#4696E0] shadow-inner"
                />
              ))}
            </div>

            {/* Tombol Aksi */}
            <div className="flex flex-col items-center gap-3 w-full max-w-[280px]">
              <button
                type="button"
                className="w-full py-2.5 px-6 bg-[#FF0000] hover:bg-[#E60000] text-white text-sm font-semibold rounded-lg shadow-sm transition active:scale-[0.98] cursor-pointer"
              >
                Masuk
              </button>

              <button
                type="button"
                className="w-full py-2 px-6 bg-white hover:bg-zinc-50 border border-zinc-400 text-zinc-800 text-sm font-medium rounded-lg transition active:scale-[0.98] cursor-pointer"
              >
                Kirim ulang kode
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
