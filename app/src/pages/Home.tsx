import Header from '../components/Header';
import Hero from '../sections/Hero';
import Modes from '../sections/Modes';
import Flow from '../sections/Flow';
import UseCases from '../sections/UseCases';
import Team from '../sections/Team';
import Report from '../sections/Report';
import Trust from '../sections/Trust';
import CtaBand from '../sections/CtaBand';
import Footer from '../sections/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Modes />
        <Flow />
        <UseCases />
        <Team />
        <Report />
        <Trust />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
