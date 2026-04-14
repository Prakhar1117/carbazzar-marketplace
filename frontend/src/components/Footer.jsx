import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full rounded-t-3xl bg-stone-100 border-t border-stone-200 font-publicSans text-sm">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 w-full max-w-screen-2xl mx-auto">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <div className="text-lg font-bold text-stone-800 mb-2">CarBazzar</div>
          <p className="text-stone-500 max-w-sm">© 2024 CarBazzar. All rights reserved. Professional Used Car Marketplace.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          <a className="text-stone-500 hover:underline decoration-orange-500 transition-opacity duration-200" href="#">Privacy Policy</a>
          <a className="text-stone-500 hover:underline decoration-orange-500 transition-opacity duration-200" href="#">Terms of Service</a>
          <a className="text-stone-500 hover:underline decoration-orange-500 transition-opacity duration-200" href="#">Cookie Policy</a>
          <a className="text-stone-500 hover:underline decoration-orange-500 transition-opacity duration-200" href="#">Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
