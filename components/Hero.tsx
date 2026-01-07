"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-32 pb-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full mb-8">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-600">
                AI SaaS Only • Screen-led • Monthly delivery
              </span>
            </div>

            <h1 className="text-[56px] lg:text-[64px] font-bold leading-[1.05] tracking-tight mb-6">
              Viral scenario videos that show your AI SaaS{" "}
              <span className="text-accent">in real use</span> — on screen
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-xl">
              Use Case Studio creates short-form videos that feel like real life (POV, story, "caught" moments)
              and showcase your product being used in real time on screen. Not talking-head UGC. Not stitched product clips.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-accent text-white text-[15px] font-semibold rounded-full hover:shadow-xl hover:shadow-accent/20 transition-all hover:-translate-y-1 flex items-center gap-2">
                Get 3 video concepts
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="px-8 py-4 text-gray-900 text-[15px] font-medium rounded-full hover:text-accent transition-colors flex items-center gap-2">
                View packages
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-8">
              AI SaaS only • Screen-led content • Dedicated creator • Monthly delivery • Optional posting
            </p>
          </div>

          {/* Right Visual - Video Stack */}
          <div className="relative h-[600px] hidden lg:block">
            <VideoCard
              className="absolute top-0 right-16 w-72 h-96 rotate-3 animate-[float_6s_ease-in-out_infinite]"
              brand="AI"
              name="AIWriter Pro"
              stats="142K views • 2d ago"
            />
            <VideoCard
              className="absolute bottom-10 left-0 w-60 h-80 -rotate-6 animate-[float_7s_ease-in-out_infinite]"
              brand="C"
              name="CodeAI"
              stats="89K views • 1w ago"
            />
            <VideoCard
              className="absolute top-32 -right-4 w-52 h-64 -rotate-2 animate-[float_5s_ease-in-out_infinite] -z-10"
              brand="D"
              name="DataMind"
              stats="56K views"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoCard({
  className,
  brand,
  name,
  stats,
  imageSrc
}: {
  className?: string;
  brand: string;
  name: string;
  stats: string;
  imageSrc?: string;
}) {
  return (
    <div className={`bg-white rounded-3xl shadow-2xl overflow-hidden ${className}`}>
      <div className="h-[70%] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center scanline relative">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover"
          />
        ) : (
          <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-7 h-7 bg-accent/10 rounded-full flex items-center justify-center">
            <span className="text-xs font-semibold text-accent">{brand}</span>
          </div>
          <span className="text-sm font-semibold">{name}</span>
        </div>
        <p className="text-xs text-gray-500">{stats}</p>
      </div>
    </div>
  );
}
