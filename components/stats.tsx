'use client';

export const Article2 = () => {
  const stats = [
    {
      number: "240,909+",
      description: "videos created with revid.ai"
    },
    {
      number: "14,258+",
      description: "creators using revid.ai"
    },
    {
      number: "400+",
      description: "creators reached 100k+ views"
    },
    {
      number: "32 languages",
      description: "and used in 68 countries"
    }
  ];

  return (
    <article className="rounded-3xl px-4 sm:px-6 md:px-8 pb-8 border border-[#252629] bg-[#15171A] max-w-7xl mx-auto">
      {/* Top decorative border */}
      <div className="relative z-20 h-8 sm:h-10 border border-t-0 border-[#ffffff10] bg-[#15171A]"></div>
      
      {/* Stats Grid Section */}
      <section className="-mt-3 lg:pt-10 py-8 bg-[#ffffff04] rounded-2xl rounded-t-none border border-t-0 border-[#ffffff10] divide-y sm:divide-x sm:divide-y-0 divide-[#ffffff10] grid sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="text-center sm:px-8 lg:px-10 mx-8 sm:mx-0 py-10 sm:py-4 space-y-2"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-l from-[#5AE88F] from-25% to-[#78CDF9] to-60% bg-clip-text text-transparent">
              {stat.number}
            </h2>
            <p className="text-neutral-400 text-sm">
              {stat.description}
            </p>
          </div>
        ))}
      </section>
    </article>
  );
};
