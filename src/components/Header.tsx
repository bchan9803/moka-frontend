import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Header = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);

  const navigate = useNavigate();


  const logout = () => {
    setCookies('access_token', '');
    // window.localStorage.clear("userId");
    window.localStorage.clear();
    navigate('/');    // redirect to home page
    navigate(0);
  };

  return (
    <header className="navbar bg-base-100">
      {/* header menu options */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg">
            <li><Link reloadDocument to='/import-recipes'>Recipes</Link></li>
            <li><Link reloadDocument to='/about'>About</Link></li>

            {/* display logout btn if user is logged in */}
            {cookies.access_token ?
              <li className=''><button onClick={logout} className='hover:bg-red-400 hover:font-bold'>Logout</button></li>
              :
              <li><Link reloadDocument to='/login'>Login</Link></li>}
          </ul>
        </div>
      </div>

      {/* header logo */}
      <div className="navbar-center">
        <Link reloadDocument to='/' className="btn btn-ghost font-bold italic text-xl md:text-4xl">Moka!</Link>
      </div>

      {/* header account info */}
      <div className="navbar-end mr-6">
        {cookies.access_token ? (
          // account info
          <div className="account-menu-comp dropdown">

            {/* account button */}
            <div tabIndex={0} role='button' className="btn text-xl bg-transparent border-0">Account</div>

            {/* acount options */}
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-fit border-2">
              <li><Link reloadDocument to='/add-recipe'>Add Recipe</Link></li>
              <li><Link reloadDocument to='/recipes'>Recipes</Link></li>
              <li className=''><button onClick={logout} className='hover:bg-red-400 hover:font-bold'>Logout</button></li>
            </ul>
          </div>
        )
          :
          <Link className='btn font-bold bg-transparent border-0 text-lg' reloadDocument to='/login'>Login</Link>
        }
      </div>
    </header>
  );
};

export default Header;