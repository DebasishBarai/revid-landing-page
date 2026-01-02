'use client';

export const Article3 = () => {
  const videos = [
    {
      poster: "https://cdn.revid.ai/thumbnail/6zmk9uhimSM4wpQf2V4R-1747152919071.webp",
      src: "https://cdn.revid.ai/renders/gjcIDd3JXNbmRF7DcHp7/6zmk9uhimSM4wpQf2V4R-1747152919071.mp4",
      badge: "100% generated",
      link: "/tools/talking-avatar",
      cols: 1
    },
    {
      poster: "https://cdn.revid.ai/thumbnail/BkFMpcz2oAQo9MW3JiRB-1744895354187.webp",
      src: "https://cdn.revid.ai/renders/gjcIDd3JXNbmRF7DcHp7/BkFMpcz2oAQo9MW3JiRB-1744895354187.mp4",
      badge: "100% generated",
      link: "/tools/prompt-to-video",
      cols: 1
    },
    {
      poster: "https://cdn.revid.ai/static/wolf.webp",
      src: "https://cdn.revid.ai/static/Guided%20by%20a%20Wolf_s%20Instincts.mp4",
      badge: "100% generated",
      link: "/tools/ai-cinematic-video",
      cols: 2
    },
    {
      poster: "https://cdn.revid.ai/thumbnail/santa-video-generator.webp",
      src: "https://cdn.revid.ai/static/tools/santa-video-generator.mp4",
      badge: "avatar + media generated",
      link: "/tools/talking-avatar",
      cols: 1
    },
    {
      poster: "https://cdn.revid.ai/static/music-to-video.webp",
      src: "https://cdn.revid.ai/renders/gjcIDd3JXNbmRF7DcHp7/vVoXK7Q1NLHR5n3tosx3-1754920973374.mp4",
      badge: "100% generated",
      link: "/tools/ai-music-video-generator",
      cols: 2
    },
    {
      poster: "https://cdn.revid.ai/ai-gen/ahwPdMnLiX.jpg",
      src: "https://cdn.revid.ai/renders/gjcIDd3JXNbmRF7DcHp7/wokP1jkEBN023669K6U3-1764757719117.mp4",
      badge: "100% generated",
      link: "/tools/ai-music-video-generator",
      cols: 1
    }
  ];

  return (
    <article 
      id="showcase-videos" 
      className="mt-4 relative text-[#BEC0C7] rounded-3xl p-4 sm:p-6 md:p-8 !pt-0 border border-[#252629] w-full bg-[#15171a] mb-6"
    >
      <div className="w-full relative">
        {/* Top decorative border */}
        <div className="relative rounded-b-2xl z-20 h-12 sm:h-14 border border-t-0 border-[#ffffff10] bg-[#15171A]"></div>
        
        {/* Header Section */}
        <div className="relative z-20 mx-auto -mt-5">
          <div>
            {/* Badge */}
            <div className="bg-[#1a1c1f] flex items-center space-x-1 py-1.5 px-3.5 mx-auto text-green-200 border border-[#252629] w-fit font-medium text-sm rounded-lg p-[1.5px]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M9.15327 2.33999L10.3266 4.68666C10.4866 5.01333 10.9133 5.32666 11.2733 5.38666L13.3999 5.73999C14.7599 5.96666 15.0799 6.95333 14.0999 7.92666L12.4466 9.57999C12.1666 9.85999 12.0133 10.4 12.0999 10.7867L12.5733 12.8333C12.9466 14.4533 12.0866 15.08 10.6533 14.2333L8.65994 13.0533C8.29994 12.84 7.70661 12.84 7.33994 13.0533L5.34661 14.2333C3.91994 15.08 3.05327 14.4467 3.42661 12.8333L3.89994 10.7867C3.98661 10.4 3.83327 9.85999 3.55327 9.57999L1.89994 7.92666C0.926606 6.95333 1.23994 5.96666 2.59994 5.73999L4.72661 5.38666C5.07994 5.32666 5.50661 5.01333 5.66661 4.68666L6.83994 2.33999C7.47994 1.06666 8.51994 1.06666 9.15327 2.33999Z" 
                  stroke="#BEFFD6" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm">Impact</span>
            </div>

            {/* Title */}
            <h2 className="py-6 text-white !leading-tight max-w-2xl mx-auto text-center text-3xl lg:text-4xl xl:text-5xl capitalize">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                240,909+
              </span>
              {" "}short videos created by over{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                14,258
              </span>
              {" "}creators
            </h2>

            {/* Description */}
            <p className="text-center max-w-xl mx-auto">
              Whether you're sharing personal experiences, learning moments, or entertainment - we help you tell stories that go viral.
            </p>
          </div>

          {/* Video Grid */}
          <div className="pt-14 grid grid-cols-2 lg:grid-cols-4 gap-5">
            {videos.map((video, index) => (
              <div
                key={index}
                className={`group items-center justify-center relative ${
                  video.cols === 2 ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Badge on hover */}
                <div className="absolute z-10 top-2 right-2 flex items-center gap-2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="inline-flex items-center rounded-full border text-xs font-semibold bg-slate-900 text-slate-50 hover:bg-slate-900/80 px-2.5 py-0.5 border-white">
                    {video.badge}
                  </div>
                </div>

                {/* Button on hover */}
                <div className="absolute z-10 bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <a href={video.link}>
                    <button className="inline-flex gap-1.5 items-center justify-center whitespace-nowrap font-medium bg-white hover:bg-gray-100 text-gray-900 border border-gray-200 px-3 py-1.5 text-[0.85rem] rounded-md shadow-lg">
                      Create Similar Video
                    </button>
                  </a>
                </div>

                {/* Video */}
                <div className="w-full h-72 md:h-[30rem] relative">
                  <video
                    className="bg-white shadow-2xl rounded-[10px] object-cover w-full h-full rounded-2xl"
                    poster={video.poster}
                    preload="none"
                    muted
                    loop
                    playsInline
                    autoPlay
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
