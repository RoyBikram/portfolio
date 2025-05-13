import About from "@/components/sections/home/About";
import Hero from "@/components/sections/home/Hero";
import Portfolio from "@/components/sections/home/Portfolio";
import Progress from "@/components/sections/home/Progress";
import Services from "@/components/sections/home/Services";
import Tech from "@/components/sections/home/Tech";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Tech />
      <Progress />
    </>
  );
}
