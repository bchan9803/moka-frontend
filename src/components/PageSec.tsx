const PageSec = (props) => {
  return (
    <section className='mt-32 flex flex-col align-center gap-4 p-4'>
      <h1 className='font-bold text-3xl lg:text-5xl mb-4 mx-auto'>{props.secTitle}</h1>

      <section className='flex flex-wrap flex-row justify-center gap-10'>
        {props.children}
      </section>
    </section>
  );
};

export default PageSec;