"use client";

import Image from 'next/image';

const logos = [
  '/logos/ostium.png',
  '/logos/whop.png',
  '/logos/chaoslabs.png',
  '/logos/ninetyeight.png',
  '/logos/other.png', // Add more if needed
];

export default function LogoSlider() {
  return (
    <div className="w-full bg-black py-6 flex justify-center">
      <div className="relative max-w-[600px] w-full overflow-hidden fade-mask">
        <div
          className="flex w-max animate-scroll items-center"
          style={{
            animation: 'scroll 20s linear infinite',
          }}
        >
          {[...logos, ...logos].map((src, i) => (
            <div
              key={i}
              className="px-10 flex items-center justify-center min-w-[150px] h-[60px]"
            >
              <Image src={src} alt={`Logo ${i}`} width={100} height={40} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 