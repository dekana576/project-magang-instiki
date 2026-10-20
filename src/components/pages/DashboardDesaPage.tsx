"use client";

import React from "react";
import TopBar from "@/components/fragments/TopBar";
import Sidebar from "@/components/fragments/sidebar";

export default function DashboardDesaPage() {
  return (
    <div className="h-screen bg-[#F8FAFC] flex flex-col overflow-hidden font-sans">
      {/* Top Bar */}
      <TopBar />

      {/* Kontainer Bawah: Sidebar di sisi kiri, Konten di sisi kanan */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Area Konten Utama */}
        <main className="flex-1 p-2.5 sm:p-3 flex flex-col overflow-y-auto">
          <div className="w-full h-full min-h-[400px] border-2 border-zinc-300/80 rounded-xl flex items-center justify-center bg-white shadow-sm">
            <span className="text-zinc-400 text-lg sm:text-xl font-medium tracking-wide">
              konten disini
            </span>
          </div>
        </main>
      </div>
    </div>
  );
}
