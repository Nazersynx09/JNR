'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-zinc-900 text-white py-16 px-6 flex items-center justify-center min-h-screen">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-8 scale-[0.95] md:scale-100">

        {/* Image Section */}
        <div className="flex-shrink-0">
          <Image
            src="/Avatar.png"
            alt="Profile"
            width={200}
            height={200}
            className="rounded-full shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Hi, I do <span className="text-orange-400">Code</span> and <span className="text-orange-600">Graphic Design</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-gray-300">
            I am a seasonal web-based programmer with a degree in Information System Major in Business Application Development. I build clean, responsive web applications and turn ideas into interactive experiences.
          </p>

          {/* Download Button */}
          <div className="mt-6">
            <Link
              href="/assets/Reola Resume.pdf"
              className="bg-transparent border border-white text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-black transition-colors duration-200"
            >
              Download Resume
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
