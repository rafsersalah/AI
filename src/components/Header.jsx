'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-sky-700 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <span className="font-extrabold text-lg text-gray-900 tracking-tight">مهني قريب</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-3">
            <Link
              href="/join"
              className="text-gray-700 hover:text-sky-700 font-semibold text-sm transition-colors"
            >
              أضف خدمتك
            </Link>
            <Link
              href="/join"
              className="px-4 py-2 bg-sky-700 hover:bg-sky-800 text-white font-bold text-sm rounded-xl transition-colors"
            >
              دخول المهنيين
            </Link>
          </nav>

          {/* Mobile: join button + hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <Link
              href="/join"
              className="px-3 py-1.5 bg-sky-700 hover:bg-sky-800 text-white font-bold text-xs rounded-lg transition-colors"
            >
              أضف خدمتك
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="القائمة"
            >
              {menuOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="sm:hidden pb-3 border-t border-gray-100 pt-3 space-y-1">
            <Link
              href="/join"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-right px-3 py-2.5 text-gray-800 font-semibold text-sm hover:bg-gray-50 rounded-lg transition-colors"
            >
              دخول المهنيين
            </Link>
            <Link
              href="/join"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-right px-3 py-2.5 text-gray-800 font-semibold text-sm hover:bg-gray-50 rounded-lg transition-colors"
            >
              أضف خدمتك
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
