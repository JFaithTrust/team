import { Navbar } from "@/components";
import { About, Footer, Header, Skills, Testimonial, Work } from "@/container";
import './home.scss'

export default function Home() {
  return (
    <main className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </main>
  );
}
