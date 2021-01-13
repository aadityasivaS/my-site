import { useEffect } from 'react';
import FirstContainer from '../components/first-container';
import SecondContainer from '../components/second-container';
import ThirdContainer from '../components/third-container';
import FourthContainer from '../components/fourth-container';
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.esm');
    AOS.init();
  })
  return (
    <div>
      <main>
        <FirstContainer />
        <SecondContainer />
        <ThirdContainer />
        <FourthContainer />
      </main>
    </div>
  )
}
