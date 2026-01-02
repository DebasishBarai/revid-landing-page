'use client';

import Image from "next/image";

export const Article4 = () => {
  const features = [
    {
      title: "AI Script Generator",
      description: "Write or get video script automatically. You don't have to be perfect to get amazing results.",
      image: "/images/ai-script-generator.webp",
      cols: 1
    },
    {
      title: "50+ Unique Voices",
      description: "Pick one of the male and female voices that resonate with your audience.",
      image: "/images/unique-voices.webp",
      cols: 1
    },
    {
      title: "Video Styles & Templates",
      description: "Whether you need a TikTok, YouTube Clip, or an AI-generated talking avatar, all you have to do is select an option.",
      image: "/images/video-styles.webp",
      cols: 2
    },
    {
      title: "Super-Simple Editor",
      description: "Get the look you want with an intuitive editor designed for simplicity. No complex tools-just quick, easy edits that let your creativity shine through.",
      image: "/images/super-simple-editor.webp",
      cols: 2
    },
    {
      title: "High-Quality - Forever Yours",
      description: "Your exports are crisp, clear, and entirely yours. Keep your videos forever, even if you part ways with us.",
      image: "/images/high-quality.webp",
      cols: 1
    }
  ];

  return (
    <div className="text-[#bec0c7] rounded-3xl px-4 sm:px-6 md:px-8 border border-[#252629] bg-[#15171A] w-full mt-4">
      {/* Header Section */}
      <div className="relative rounded-b-3xl py-12 space-y-8 border border-t-0 border-white/10">
        {/* Badge */}
        <div className="bg-[#1a1c1f] flex items-center space-x-1 py-1.5 px-3.5 mx-auto text-green-200 border border-[#252629] w-fit font-medium text-sm rounded-lg p-[1.5px]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.33398 13H14.0007" stroke="#BEFFD6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.33398 8.33337H14.0007" stroke="#BEFFD6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.33398 3.66663H14.0007" stroke="#BEFFD6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 3.66671L2.66667 4.33337L4.66667 2.33337" stroke="#BEFFD6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 8.33333L2.66667 9L4.66667 7" stroke="#BEFFD6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 13L2.66667 13.6666L4.66667 11.6666" stroke="#BEFFD6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-sm">What to Expect</span>
        </div>

        {/* Title */}
        <h2 className="bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent text-3xl lg:text-4xl xl:text-5xl text-center w-11/12 max-w-3xl text-balance mx-auto !leading-tight">
          Everything You Need to Create Amazing Videos
        </h2>

        {/* Description */}
        <p className="text-center w-[90%] max-w-xl mx-auto">
          We've cracked the code to viral content and we'll hand you all the tools to make it happen in minutes.
        </p>
      </div>

      {/* Video Showcase Section */}
      <div className="space-y-12 py-12 lg:py-12">
        <div className="flex justify-center items-center relative w-5/6 mx-auto">
          {/* Left video */}
          <div className="bg-white outline w-1/2 md:max-w-[500px] absolute hidden sm:block sm:-left-1/4 md:right-1/4 mx-auto outline-[6px] outline-[#636363]/25 rounded-xl object-cover">
            <video
              className="bg-white shadow-2xl rounded-[10px] object-cover w-full"
              poster="https://cdn.revid.ai/static/space-exploration.webp"
              preload="none"
              loop
              playsInline
              autoPlay
              muted
            >
              <source src="https://cdn.revid.ai/static/alliance-in-the-canopy.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Center video */}
          <div className="bg-white outline w-11/12 md:w-3/4 md:max-w-[380px] relative z-10 mx-auto outline-[6px] outline-[#636363]/25 rounded-xl object-cover">
            <video
              className="bg-white shadow-2xl rounded-[10px] object-cover w-full"
              poster="https://cdn.revid.ai/static/boy-and-dog.webp"
              preload="none"
              muted
              loop
              playsInline
              autoPlay
            >
              <source src="https://cdn.revid.ai/static/Flicker%20in%20the%20Shadows.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Right video */}
          <div className="bg-white outline w-1/2 md:max-w-[500px] absolute hidden sm:block sm:-right-1/4 md:left-1/4 -z-0 mx-auto outline-[6px] outline-[#636363]/25 rounded-xl object-cover">
            <video
              className="bg-white shadow-2xl rounded-[10px] object-cover w-full"
              poster="https://cdn.revid.ai/static/men-scuffle.webp"
              preload="none"
              loop
              playsInline
              autoPlay
              muted
            >
              <source src="https://cdn.revid.ai/static/Rivalry%20in%20the%20City.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Glow effect */}
          <div className="absolute bg-gradient-to-b from-[#BEFFD6] to-[#92DAFF] blur-[125px] w-[35%] h-[45%] mb-6 -z-10"></div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="my-12 mb-28 gap-4 grid md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`p-4 bg-[#FFFFFF05] border border-[#252629] rounded-2xl ${
              feature.cols === 2 ? 'md:col-span-2' : ''
            }`}
          >
            <div className="relative w-full">
              <Image
                alt={feature.title.toLowerCase()}
                src={feature.image}
                width={500}
                height={300}
                className="mx-auto aspect-auto rounded-t-xl object-cover object-center w-full h-auto"
              />
            </div>
            <div className="space-y-3 pt-5">
              <h5 className="text-white font-medium">{feature.title}</h5>
              <p className="text-sm">{feature.description}</p>
            </div>
          </div>
        ))}

        {/* "...and more!" card */}
        <div className="relative flex items-center justify-center w-full h-full m-auto text-white p-4 bg-[#FFFFFF05] border border-[#252629] rounded-2xl">
          <span className="text-center">...and more!</span>
        </div>
      </div>

      {/* Footer CTA Section */}
      <div className="border-t border-x rounded-t-3xl border-white/10 mx-auto flex flex-col items-center space-y-5 py-12 lg:py-28">
        <Image
          alt="revid.ai logo"
          src="/images/revid_logo_rec_light.png"
          width={154}
          height={30}
          className="mx-auto"
        />
        <p className="text-neutral-400 max-w-lg w-[95%] mx-auto text-center text-pretty">
          Your shortcut to effortless video storytelling
        </p>
        <div className="flex flex-col gap-2 items-center justify-center">
          <div className="w-fit">
            <a
              className="inline-block px-6 py-3 bg-gradient-to-r from-[#45EC82] to-[#75CEFC] text-black font-semibold rounded-lg hover:opacity-90 transition-opacity"
              href="/login"
            >
              Create videos now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
