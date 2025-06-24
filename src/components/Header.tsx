'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuthClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <header className="bg-white border border-gray-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
              src="/images/pictet-logo.png"
              alt="Pictet Logo"
              width={120}
              height={36}
              priority
            />
          </Link>
        </div>
        <div className="flex items-center space-x-8">
          <span className="text-lg text-gray-700">Private Banker Name</span>
          <button
            onClick={handleAuthClick}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            {isLoggedIn ? 'logout' : 'login'}
          </button>
        </div>
      </nav>
      <div className="w-full h-px bg-black"></div>
    </header>
  );
} 