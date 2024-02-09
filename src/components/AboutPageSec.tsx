
const AboutPageSec = (props) => {
  return (
    <section className='about-sec flex flex-col align-center gap-4'>
      <img src={props.img} alt="coffee with friends" className='w-full' />

      <h2 className='font-bold text-5xl mt-16 mx-auto'>{props.title}</h2>

      <section className='flex flex-wrap flex-row justify-center gap-10 w-4/6 mx-auto mb-32 '>
        {props.children}
      </section>
    </section>
  );
};

export default AboutPageSec;