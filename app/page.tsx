import { HeroSection } from '@/components/hero'
import { Article2 } from '@/components/stats'
import { Article3 } from '@/components/showcase'
import { Article4 } from '@/components/features'

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen min-w-full flex flex-col justify-start items-center">
        <HeroSection />
        <Article2 />
        <Article3 />
        <Article4 />
    </div>
  );
}
