import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import OurSolution from '../components/OurSolution';
import TheTeam from '../components/TheTeam';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import Ticker from '../components/Ticker';


export default function Home() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <section id="who" className="py-24"><WhoWeAre /></section>
        <section id="solution" className="py-24"><OurSolution /></section>
        <section id="team" className="py-24"><TheTeam /></section>
        <section id="contact" className="py-24"><ContactUs /></section>
        <Ticker />
      </main>
      <Footer />
    </div>
  );
}
