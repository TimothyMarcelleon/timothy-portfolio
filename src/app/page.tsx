import { About } from "@/components/about";
import { CaseStudies } from "@/components/case-studies";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <CaseStudies />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
