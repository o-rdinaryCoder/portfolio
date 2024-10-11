import AboutSection from "@/components/about-section";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import Head from "./head";

export default function Home() {
  return (
    <>
      <Head />
      <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </main>
    </>
  );
}
