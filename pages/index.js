import { useEffect } from 'react';
import FirstContainer from '../components/first-container';
import SecondContainer from '../components/second-container';
import ThirdContainer from '../components/third-container';
import FourthContainer from '../components/fourth-container';
import FifthContainer from '../components/fifth-container';
export default function Home() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.esm');
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "4zhcqripq9");
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
