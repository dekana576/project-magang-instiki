"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    LayoutGrid,
    ChevronDown,
    Landmark,
    LogOut
} from "lucide-react";

export default function Sidebar() {
    // State untuk dropdown "Data Pengajuan Layanan" dan "Berkas Pengajuan" 
    const [openDataPengajuan, setOpenDataPengajuan] = useState(false);
    const [openBerkasPengajuan, setOpenBerkasPengajuan] = useState(false);

    return (
        <aside className="w-64 h-full shrink-0 flex flex-col justify-between bg-[#1478CA] text-white select-none font-sans shadow-md">
            {/* Header Sticky / Tetap di Atas */}
            <div className="shrink-0">
                {/* Logo / Header Sidebar */}
                <div className="px-4 pt-5 pb-1 flex items-center gap-3">
                    <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                        <Landmark className="w-6 h-6 text-[#5b54e0]" strokeWidth={2.2} />
                    </div>
                    <div>
                        <h1 className="font-extrabold text-[17px] tracking-wide leading-tight text-white">
                            DUTA
                        </h1>
                        <p className="text-[10px] font-bold text-white/95 tracking-wider mt-0.5">
                            KABUPATEN TABANAN
                        </p>
                    </div>
                </div>

                {/* Garis Putih Pemisah Atas */}
                <div className="h-[1.5px] bg-white/40 mx-4 my-3.5" />
            </div>

            {/* Konten Menu Navigasi */}
            <div className="flex-1 overflow-y-auto px-3 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full">
                {/* Menu Utama Title */}
                <div className="px-1 mb-2">
                    <p className="text-[11px] font-bold tracking-wider text-white uppercase">
                        MENU UTAMA
                    </p>
                </div>

                {/* Menu Utama Container */}
                <nav className="flex flex-col space-y-0.5 text-sm">
                    {/* Dashboard (Active State) */}
                    <div className="mb-1">
                        <Link
                            href="#"
                            className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white/20 text-white font-medium shadow-xs transition-all hover:bg-white/25"
                        >
                            <LayoutGrid className="w-4 h-4 text-white shrink-0" />
                            <span>Dashboard</span>
                        </Link>
                    </div>

                    {/* Data Pengajuan Layanan (Dropdown) */}
                    <div>
                        <button
                            onClick={() => setOpenDataPengajuan(!openDataPengajuan)}
                            className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/10 text-white font-semibold text-sm transition-all cursor-pointer"
                        >
                            <span>Data Pengajuan Layanan</span>
                            <ChevronDown
                                className={`w-4 h-4 text-white transition-transform duration-200 ${openDataPengajuan ? "rotate-0" : "-rotate-90"
                                    }`}
                            />
                        </button>

                        {/* Sub Menu Data Pengajuan */}
                        {openDataPengajuan && (
                            <div className="pl-10 pr-2 py-1 space-y-2 text-xs font-normal text-white">
                                <Link href="#" className="block hover:text-white/80 transition">Kartu Keluarga</Link>
                                <Link href="#" className="block hover:text-white/80 transition">KTP - el</Link>
                                <Link href="#" className="block hover:text-white/80 transition">KIA</Link>
                                <Link href="#" className="block hover:text-white/80 transition">Akta Kelahiran</Link>
                                <Link href="#" className="block hover:text-white/80 transition">Akta Kematian & Santimas</Link>
                                <Link href="#" className="block hover:text-white/80 transition">Akta Perkawinan & Perceraian</Link>
                                <Link href="#" className="block hover:text-white/80 transition">Penduduk Non Permanen</Link>
                                <Link href="#" className="block hover:text-white/80 transition">Pindah Datang</Link>
                                <Link href="#" className="block hover:text-white/80 transition">Perubahan Elemen Data</Link>
                                <Link href="#" className="block hover:text-white/80 transition">Aktivasi IKD</Link>
                            </div>
                        )}
                    </div>

                    {/* Berkas Pengajuan (Dropdown) */}
                    <div className="pt-0.5">
                        <button
                            onClick={() => setOpenBerkasPengajuan(!openBerkasPengajuan)}
                            className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/10 text-white font-semibold text-sm transition-all cursor-pointer"
                        >
                            <span>Berkas Pengajuan</span>
                            <ChevronDown
                                className={`w-4 h-4 text-white transition-transform duration-200 ${openBerkasPengajuan ? "rotate-0" : "-rotate-90"
                                    }`}
                            />
                        </button>

                        {openBerkasPengajuan && (
                            <div className="pl-10 pr-2 py-1 space-y-2 text-xs font-normal text-white">
                                <Link href="#" className="block hover:text-white/80 transition">Perlu Revisi</Link>
                                <Link href="#" className="block hover:text-white/80 transition">Divalidasi</Link>
                            </div>
                        )}
                    </div>

                    {/* Permohonan Diterbitkan */}
                    <Link
                        href="#"
                        className="flex items-center px-3 py-2 rounded-lg hover:bg-white/10 text-white font-semibold text-sm transition-all"
                    >
                        <span>Permohonan Diterbitkan</span>
                    </Link>

                    {/* Laporan */}
                    <Link
                        href="#"
                        className="flex items-center px-3 py-2 rounded-lg hover:bg-white/10 text-white font-semibold text-sm transition-all"
                    >
                        <span>Laporan</span>
                    </Link>

                    {/* Pengaturan Sistem */}
                    <Link
                        href="#"
                        className="flex items-center px-3 py-2 rounded-lg hover:bg-white/10 text-white font-semibold text-sm transition-all"
                    >
                        <span>Pengaturan Sistem</span>
                    </Link>
                </nav>
            </div>

            {/* Profil User di Bawah Sidebar (Tetap di Bawah) */}
            <div className="shrink-0">
                {/* Garis Putih Pemisah Bawah */}
                <div className="h-[1.5px] bg-white/40 mx-4 my-3" />

                <div className="px-4 pb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                            <div className="w-5 h-5 rounded-md bg-[#5c54e5]" />
                        </div>
                        <div>
                            <p className="text-xs font-bold leading-tight text-white">
                                I Made Gunawan
                            </p>
                            <div className="mt-1">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white text-emerald-600 text-[11px] font-semibold leading-tight shadow-xs">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                                    Online
                                </span>
                            </div>
                        </div>
                    </div>
                    <button
                        type="button"
                        aria-label="Logout"
                        className="text-white/90 hover:text-white transition-colors cursor-pointer p-1"
                    >
                        <LogOut className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </aside>
    );
}