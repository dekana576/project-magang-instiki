"use client"
import React from "react";
import TopBar from "@/components/fragments/TopBar";


export default function RegisterPage() {
  return (
    // mengatur komponen paling dasar atau utama seperti bg paling belakang
    <div className="min-h-screen bg-[rgba(242,242,242,1)] flex flex-col">
      {/* header topBar */}
      <TopBar />

      {/* konten utama halaman register */}
      <main className="flex-1 flex items-center justify-center py-[15px] px-[15px] ">
        {/* kotak pembungkus besar warna putih, tempat naruh berbagai objek atau elemen */}
        <div className="bg-white border border-[rgba(112,112,112,1)] rounded-lg w-full p-6 sm:p-8 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center shadow-sm">

          {/* Kotak biru muda yang bakal diisi oleh gambar */}
          <div className="bg-[#D9E6F6] rounded-xl p-8 sm:p-12 flex flex-col items-center justify-center text-center h-full min-h-[350px] lg:min-h-[450px]">
            {/* ini h3 nya nanti bakal dihapus pas pakai img */}
            <h3 className="text-gray-800 font-semibold text-lg sm:text-xl md:text-2xl leading-relaxed max-w-sm">
              Dinas Kependudukan dan Pencatatan <br />
              Sipil <br />
              Kabupaten Tabanan Provinsi Bali
            </h3>
          </div>

          {/* form input register yang ada di kanan */}
          <div className="flex flex-col justify-center">
            <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
              {/* NIK */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  NIK
                </label>
                <input
                  type="text"
                  placeholder="Masukkan NIK anda..."
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#4696E0]"
                />
              </div>

              {/* nama lengkap */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  placeholder="Masukkan nama lengkap anda..."
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#4696E0]"
                />
              </div>

              {/* nomor KK */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Nomor KK
                </label>
                <input
                  type="text"
                  placeholder="Masukkan nomor kartu keluarga anda..."
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#4696E0]"
                />
              </div>

              {/* nomor HP/ Whatsapp */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Nomor HP/ Whatsapp
                </label>
                <input
                  type="text"
                  placeholder="Masukkan nomor hp/whatsapp anda..."
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#4696E0]"
                />
              </div>

              {/* email */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Masukkan email anda..."
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#4696E0]"
                />
              </div>

              {/* nama pengguna */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Nama Pengguna
                </label>
                <input
                  type="text"
                  placeholder="Masukkan nama pengguna baru anda..."
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#4696E0]"
                />
              </div>

              {/* kata sandi */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Kata sandi
                </label>
                <input
                  type="password"
                  placeholder="Masukkan kata sandi baru anda..."
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#4696E0]"
                />
              </div>

              {/* konfirmasi kata sandi */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Konfirmasi Kata sandi
                </label>
                <input
                  type="password"
                  placeholder="Masukkan konfirmasi kata sandi anda..."
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#4696E0]"
                />
              </div>

              {/* tombol kembali dan daftar */}
              <div className="flex items-center justify-between pt-4">
                <button
                  type="button"
                  className="px-6 py-2 border border-gray-400 text-gray-700 font-medium rounded-md text-sm hover:bg-gray-50 transition"
                >
                  Kembali
                </button>
                <button
                  type="submit"
                  className="px-8 py-2 bg-[#0077B6] hover:bg-[#006096] text-white font-medium rounded-md text-sm transition shadow-sm"
                >
                  Daftar
                </button>
              </div>
            </form>
          </div>

        </div>
      </main>
    </div>
  );
}
