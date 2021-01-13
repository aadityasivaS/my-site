import { useEffect } from 'react';
import FirstContainer from '../components/first-container';
import SecondContainer from '../components/second-container';
import ThirdContainer from '../components/third-container';
import FourthContainer from '../components/fourth-container';
import FifthContainer from '../components/fifth-container';
export default function Home() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.esm');
  })
  return (
    <div>
      <main>
        <FirstContainer />
        <SecondContainer />
        <ThirdContainer />
        <FourthContainer />
        <FifthContainer />
      </main>
    </div>
  )
}
