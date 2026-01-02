import { HeroSection } from '@/components/hero'
import { Article2 } from '@/components/stats'
import { Article3 } from '@/components/showcase'
import { Article4 } from '@/components/features'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <HeroSection />
        <Article2 />
        <Article3 />
        <Article4 />
    </div>
  );
}
