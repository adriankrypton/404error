'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Large 404 Display */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-slate-900 via-slate-600 to-slate-400 bg-clip-text text-transparent leading-none tracking-tight">
            404
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/50 p-8 md:p-12 mb-8">
          <div className="space-y-6">
            {/* German Error Message */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
                Seite nicht gefunden
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                kein inhalt auf diesem server
              </p>
            </div>

            {/* Additional Context */}
            <div className="border-t border-slate-200 pt-6">
              <p className="text-slate-500 text-base leading-relaxed max-w-md mx-auto">
                Die angeforderte Seite konnte nicht gefunden werden. Möglicherweise wurde sie verschoben oder ist nicht mehr verfügbar.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="group flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            <Home className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
            Zur Startseite
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="group flex items-center gap-3 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 hover:border-slate-400 px-8 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 hover:shadow-md"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            Zurück
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-xl"></div>
      </div>
    </div>
  );
}