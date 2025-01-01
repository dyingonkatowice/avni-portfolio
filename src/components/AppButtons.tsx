"use client"

import Link from "next/link";

export default function AppButtons({ className }: { className?: string }) {
  const APKUrl = "https://play.google.com/store/apps/details?id=com.tokatiz.android&hl=en";
  const IOSUrl = "https://apps.apple.com/pl/app/tokatiz/id6476443573";

  return (
    <div className={`grid grid-cols-2 gap-4 ${className}`}>
      <Link 
        href={APKUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-black hover:opacity-80 transition-opacity rounded-lg flex items-center justify-center h-[60px]"
      >
        <div className="text-white text-center leading-tight">
          <div className="text-xs">GET IT ON</div>
          <div className="text-xl font-semibold">Google Play</div>
        </div>
      </Link>
      <Link 
        href={IOSUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-black hover:opacity-80 transition-opacity rounded-lg flex items-center justify-center h-[60px]"
      >
        <div className="text-white text-center leading-tight">
          <div className="text-xs">Download on the</div>
          <div className="text-xl font-semibold">App Store</div>
        </div>
      </Link>
    </div>
  );
} 