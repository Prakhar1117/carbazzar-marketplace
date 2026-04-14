import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <header className="w-full top-0 sticky z-50 bg-stone-50 border-b border-stone-200 shadow-sm">
      <nav className="flex justify-between items-center px-6 py-4 max-w-screen-2xl mx-auto font-publicSans antialiased">
        <Link to="/" className="text-2xl font-black tracking-tighter text-stone-900">CarBazzar</Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={({ isActive }) => `pb-1 hover:text-orange-500 transition-colors duration-200 active:scale-95 duration-100 ${isActive ? 'text-orange-500 font-bold border-b-2 border-orange-500' : 'text-stone-600 font-medium border-b-2 border-transparent'}`}>Home</NavLink>
          <NavLink to="/browse" className={({ isActive }) => `pb-1 hover:text-orange-500 transition-colors duration-200 active:scale-95 duration-100 ${isActive ? 'text-orange-500 font-bold border-b-2 border-orange-500' : 'text-stone-600 font-medium border-b-2 border-transparent'}`}>Buy</NavLink>
          <NavLink to="/sell" className={({ isActive }) => `pb-1 hover:text-orange-500 transition-colors duration-200 active:scale-95 duration-100 ${isActive ? 'text-orange-500 font-bold border-b-2 border-orange-500' : 'text-stone-600 font-medium border-b-2 border-transparent'}`}>Sell</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `pb-1 hover:text-orange-500 transition-colors duration-200 active:scale-95 duration-100 ${isActive ? 'text-orange-500 font-bold border-b-2 border-orange-500' : 'text-stone-600 font-medium border-b-2 border-transparent'}`}>Contact</NavLink>
          <NavLink to="/about" className={({ isActive }) => `pb-1 hover:text-orange-500 transition-colors duration-200 active:scale-95 duration-100 ${isActive ? 'text-orange-500 font-bold border-b-2 border-orange-500' : 'text-stone-600 font-medium border-b-2 border-transparent'}`}>About Us</NavLink>
        </div>
        
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <Link to="/dashboard" className="text-sm font-bold text-stone-600 hover:text-orange-500 transition-colors">Dashboard</Link>
              <button onClick={logout} className="flex items-center text-stone-600 hover:text-orange-500 transition-colors">
                <span className="material-symbols-outlined text-2xl" data-icon="logout">logout</span>
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm font-bold text-stone-600 hover:text-orange-500 transition-colors">Sign In</Link>
              <button className="flex items-center text-stone-600 hover:text-orange-500 transition-colors">
                <span className="material-symbols-outlined text-2xl" data-icon="account_circle">account_circle</span>
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
