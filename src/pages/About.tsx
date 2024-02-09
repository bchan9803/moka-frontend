import AboutPageSec from "../components/AboutPageSec.tsx";
import AboutImg from '../assets/coffee-with-friends-i.jpg';


const About = () => {
  return (
    <main>
      <AboutPageSec img={AboutImg} title='About' >
        <h4 className='font-light mt-10 text-xl leading-loose'>
          Brewing the perfect cup of coffee can be difficult.
          <br /><br />
          Which is why here at <em><strong>Moka!</strong></em>, we want to help you accomplish that.
          <br /><br />
          With a selection of different coffee recipes to choose from, you will leave with a good recipe on hand, along with a renewed passion for coffee at heart.
        </h4>
      </AboutPageSec>
    </main>
  );
};

export default About;