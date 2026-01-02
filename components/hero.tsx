'use client';

import Image from "next/image";

export const HeroSection = () => {
  return (
    <article className="rounded-3xl px-4 sm:px-6 md:px-8 border border-[#252629] bg-[#15171A] max-w-8xl mx-auto">
      <div className="w-full relative border-x border-[#ffffff10] md:px-8 py-[7.5%] grid lg:grid-cols-2 gap-12 lg:gap-4 xl:gap-8 items-start">
        
        {/* Corner decorative dots */}
        <section className="z-0 absolute w-full h-full col-span-2 grid grid-cols-2 place-content-between pointer-events-none">
          <div className="bg-white/50 rounded-full w-1 h-1 my-8 outline outline-8 outline-[#171b1c]/60 lg:outline-[#171B1C] -mx-[2.5px]"></div>
          <div className="bg-white/50 rounded-full w-1 h-1 my-8 outline outline-8 outline-[#171b1c]/60 lg:outline-[#171B1C] -mx-[2px] place-self-end"></div>
          <div className="bg-white/50 rounded-full w-1 h-1 my-8 outline outline-8 outline-[#171b1c]/60 lg:outline-[#171B1C] -mx-[2.5px]"></div>
          <div className="bg-white/50 rounded-full w-1 h-1 my-8 outline outline-8 outline-[#171b1c]/60 lg:outline-[#171B1C] -mx-[2px] place-self-end"></div>
        </section>

        {/* Left Content Section */}
        <section className="space-y-8 mt-12 lg:mt-0 flex-2 flex flex-col gap-0">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-[48px] lg:text-[42px] xl:text-5xl 2xl:text-6xl lg:text-left leading-[50px] text-center font-medium text-white text-balance">
              Create viral videos in{" "}
              <span className="font-medium from-[#45EC82] from-[0.16%] via-[#7079F3] via-[47.81%] to-[#75CEFC] to-100% bg-gradient-to-r bg-clip-text text-transparent">
                Minutes
              </span>
            </h1>
            <p className="text-md text-neutral-400 2xl:text-base text-center lg:text-left mx-auto lg:mx-0 leading-normal">
              Turn your creative ideas into attention-grabbing TikTok, Instagram, and YouTube stories with just a few clicks. All you need is a story to tell - revid.ai handles the rest.
            </p>
          </div>

          <div className="flex justify-center lg:justify-start">
            <div className="flex flex-col gap-2 items-start justify-start">
              <div className="w-fit lg:mx-0">
                <a 
                  className="inline-block px-6 py-3 bg-gradient-to-r from-[#45EC82] to-[#75CEFC] text-black font-semibold rounded-lg hover:opacity-90 transition-opacity" 
                  href="/login"
                >
                  Create videos now
                </a>
              </div>
              <div className="text-white/60 text-xs italic">
                No credit card required
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-start">
            <article className="flex items-center flex-col mt-2 space-y-2">
              <div className="mt-0 flex flex-col justify-center items-center">
                <div className="flex gap-3 flex-col items-center lg:items-start">
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div 
                        key={i}
                        className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 ring-2 ring-white"
                      />
                    ))}
                  </div>
                  <div className="text-white/50 text-xs hover:underline">
                    <a href="/reviews">And loved by 14,258+ users</a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Right Video Section */}
        <div className="h-[440px] max-w-[280px] sm:max-w-unset mx-auto flex items-center justify-center relative">
          {/* Left video */}
          <div className="bg-white/10 border-white/90 hidden border w-[120px] sm:w-[240px] aspect-[9/16] sm:-rotate-12 sm:absolute z-20 sm:block sm:-left-1/4 sm:right-1/4 mx-auto rounded-xl overflow-hidden transition-all duration-300 hover:z-40 hover:scale-110 group">
            <div className="w-full h-full">
              <video 
                className="bg-white shadow-2xl rounded-[10px] object-cover h-full w-full" 
                poster="https://cdn.revid.ai/thumbnail/5nD2OXg8d74hb3Avqjxq-1745743754440.webp" 
                preload="none" 
                muted 
                loop 
                playsInline
                autoPlay
              >
                <source src="https://cdn.revid.ai/renders/gjcIDd3JXNbmRF7DcHp7/5nD2OXg8d74hb3Avqjxq-1745743754440.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Center video */}
          <div 
            className="bg-white/10 border-white/90 border w-11/12 sm:w-[250px] aspect-[9/16] relative z-30 mx-auto rounded-xl overflow-hidden top-[-10px] transition-all duration-300 hover:z-40 hover:scale-110 group" 
            style={{filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.65)) drop-shadow(0 8px 8px rgba(0, 0, 0, 0.10))'}}
          >
            <div className="w-full h-full">
              <video 
                className="bg-white shadow-2xl rounded-[10px] object-cover h-full w-full" 
                poster="https://cdn.revid.ai/static/cinematic-music-to-video.webp" 
                preload="none" 
                muted 
                loop 
                playsInline
                autoPlay
              >
                <source src="https://cdn.revid.ai/renders/gjcIDd3JXNbmRF7DcHp7/bo7ynCGPQfYZaDyQ18cu-1742641087135.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Right video */}
          <div className="bg-white/10 border-white/90 hidden border w-[120px] sm:w-[240px] aspect-[9/16] sm:rotate-12 sm:absolute sm:block sm:-right-1/4 sm:left-1/4 z-20 mx-auto rounded-xl overflow-hidden transition-all duration-300 hover:z-40 hover:scale-110 group">
            <div className="w-full h-full">
              <video 
                className="bg-white shadow-2xl rounded-[10px] object-cover h-full w-full" 
                poster="https://cdn.revid.ai/static/netherland-girl.webp" 
                preload="none" 
                muted 
                loop 
                playsInline
                autoPlay
              >
                <source src="https://cdn.revid.ai/static/Lily_s%20Dutch%20Adventure.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Glow effect */}
          <div className="absolute bg-gradient-to-b from-[#BEFFD6] to-[#92DAFF] blur-[55px] w-[40%] h-[85%] mb-6 z-0"></div>
        </div>
      </div>
    </article>
  );
};
