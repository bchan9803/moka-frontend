import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <article
      className='hero min-h-screen'
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
          <p className="mb-5">
            Moka! is your go-to destination for coffee enthusiasts and beginners alike. Discover the art of brewing, explore unique recipes, and learn to appreciate one of life's finest beverages.
          </p>

          <Link reloadDocument to='/recipes' className="btn btn-primary">Show Me Recipes</Link>
        </div>
      </div>
    </article>
  );
};

export default Hero;