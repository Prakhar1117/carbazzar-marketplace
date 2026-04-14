import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[870px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover" 
            alt="luxury sports car parked on a scenic coastal road during blue hour with soft elegant lighting and moody atmosphere" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjE5nydI8yaWk0-GBpYY8moHvz0LZmxfdiuB-LQabKc4fxJ6VLBh8HA3Bq5j866OsRmQEaXgQslJ40Us2aSNt8VEGBpm1p4NQc4NOFPLIocc1J6stkvNbBhijWvamdCXTDz4SC7b9227ssdEpZ18Sy2aDhu08AG6CueHY7exggiQX6LUy75aIA9yNnI-sWs29kHUzkQfmPmxGABLw6vIRQ-7kCyKfvHph9EgxP20eTviGwiPjGq8_vDwzjGOgdUx8OTPAJtmdTZPw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 via-stone-900/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 w-full py-24">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tight mb-6">
              Drive Your <br/><span className="text-primary-container">Ambition.</span>
            </h1>
            <p className="text-xl text-stone-200 mb-10 leading-relaxed font-light">
              Discover the most exclusive collection of certified pre-owned vehicles. Quality meets transparency at CarBazzar.
            </p>
            {/* Search Tool */}
            <div className="bg-surface/90 backdrop-blur-xl p-4 md:p-6 rounded-lg shadow-2xl flex flex-col md:flex-row gap-4 max-w-4xl border border-white/20">
              <div className="flex-1 space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant px-1">Make</label>
                <select className="w-full bg-surface-container-low border-none rounded p-3 text-on-surface focus:ring-2 focus:ring-primary">
                  <option>Select Make</option>
                  <option>Porsche</option>
                  <option>BMW</option>
                  <option>Mercedes-Benz</option>
                  <option>Audi</option>
                </select>
              </div>
              <div className="flex-1 space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant px-1">Model</label>
                <select className="w-full bg-surface-container-low border-none rounded p-3 text-on-surface focus:ring-2 focus:ring-primary">
                  <option>Any Model</option>
                  <option>911 Carrera</option>
                  <option>M4 Competition</option>
                  <option>S-Class</option>
                </select>
              </div>
              <div className="flex-1 space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant px-1">Price Range</label>
                <select className="w-full bg-surface-container-low border-none rounded p-3 text-on-surface focus:ring-2 focus:ring-primary">
                  <option>All Prices</option>
                  <option>$30k - $50k</option>
                  <option>$50k - $100k</option>
                  <option>$100k+</option>
                </select>
              </div>
              <div className="flex items-end">
                <button onClick={() => navigate('/browse')} className="bg-primary text-on-primary w-full md:w-auto px-8 py-3.5 rounded font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined" data-icon="search">search</span>
                  FIND CAR
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings (Bento Grid) */}
      <section className="py-24 max-w-screen-2xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-black text-on-surface tracking-tighter">Featured Listings</h2>
            <p className="text-on-surface-variant mt-2">Hand-picked premium selections for our enthusiasts.</p>
          </div>
          <button onClick={() => navigate('/browse')} className="hidden md:flex items-center gap-2 text-primary font-bold hover:underline">
            View All Inventory
            <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large Highlight Car */}
          <div className="md:col-span-8 bg-surface-container rounded-lg overflow-hidden group border border-outline-variant/30 cursor-pointer" onClick={() => navigate('/browse')}>
            <div className="relative h-96 overflow-hidden">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="silver modern sports car" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpKDgHBHmW7WKy6FKDLqfpWr3xnlyj4xCQJPrn-MuXnMlmuZ3LU88t6zoEgTjjsO-4yMdP4I4kq4BsrJtKg1k4f9uujVqilaGvN7ecXyJXb3Z63L-aGDRpPInGPTYl1OdqUks3UiSAvf0MP-u5b4sLUBGYS7tKdFOT6cgTJ8ChZ6Ycv6ACQj65MecOGwL05PzirUWDLWVDLE8Y4ETZO2_C8GYTWSU0-tvohpoQnTAoUsvQXJfIeZJG1LbNXxPHLynSt6PLpvi9lG0"/>
              <div className="absolute top-4 right-4 bg-primary-container text-on-primary-container px-4 py-1 rounded-full text-sm font-bold">New Arrival</div>
            </div>
            <div className="p-8 flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold text-on-surface">Porsche 911 Carrera S</h3>
                <div className="flex gap-4 mt-2 text-on-surface-variant font-medium">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm" data-icon="speed">speed</span> 12,400 mi</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm" data-icon="settings">settings</span> Automatic</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-black text-primary">$114,900</p>
                <button className="mt-2 text-sm font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">Details</button>
              </div>
            </div>
          </div>
          {/* Side Card 1 */}
          <div className="md:col-span-4 bg-secondary-container rounded-lg overflow-hidden flex flex-col group border border-outline-variant/30 cursor-pointer" onClick={() => navigate('/browse')}>
            <div className="h-64 relative overflow-hidden">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="black luxury sedan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9fnNwvTtIF65D0C5RxLPXmuuCwpMYWIfQ6u40z9xqEmQXmS46N5h9ts74_GhBZLgrxxZ-Vt-gCy1eAaE9dRGVJbRdsVZzKjKDbweaBgY1rgdvHBoTv2vQv8NCeUunvb6Ne5_MnHfn4GlIVB9wKZPGHu0pQcE_2VlEr9g-JK9AHgbE8CKduCekXJDN_joysBqMA0OP3cZPgRd4hls0bzu_KjpOV_yoLO1eJt_PSys20zU0tCdWEAneXqps81DLYLu3LWGj-JKGY5o"/>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-on-secondary-container">BMW M4 Competition</h3>
                <p className="text-on-secondary-container/70 mt-1">2022 | Frozen Black</p>
              </div>
              <p className="text-2xl font-black text-on-secondary-container mt-4">$89,500</p>
            </div>
          </div>
          {/* Side Card 2 */}
          <div className="md:col-span-4 bg-tertiary-container rounded-lg overflow-hidden flex flex-col group border border-outline-variant/30 cursor-pointer" onClick={() => navigate('/browse')}>
            <div className="h-64 relative overflow-hidden">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="red italian supercar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAauSEFGSVFM5tNnuGvzlCYLemerZn22OGviSjDACSPZiNQORalJpzyOzY8Gk-90JK77GPhZ1Sjy1N9vqOL_vpxXOlrOkBIUqCXH33W4ufO_10RVVlRHbrArn4AGq9snECJYKd27zrXgZLB9vUce-UTbrA2HVU9iy5IwE7UWSGBdCorcTbSIqWkvaaK2bT71MdOkN0zDIEjoNFJPVJxhNz-NAWNEmoNas3GtoMoiEDZEOJJglpvwwpIzZpn2-zDV-h4q3tgy6W6zS4"/>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-on-tertiary-container">Ferrari F8 Tributo</h3>
                <p className="text-on-tertiary-container/70 mt-1">2021 | Rosso Corsa</p>
              </div>
              <p className="text-2xl font-black text-on-tertiary-container mt-4">$324,000</p>
            </div>
          </div>
          {/* Small Info Card */}
          <div className="md:col-span-4 bg-surface-container-highest rounded-lg p-8 flex flex-col justify-center items-center text-center border border-outline-variant/30 cursor-pointer" onClick={() => navigate('/sell')}>
            <span className="material-symbols-outlined text-5xl text-primary mb-4" data-icon="directions_car">directions_car</span>
            <h3 className="text-xl font-bold text-on-surface">Sell Your Vehicle</h3>
            <p className="text-on-surface-variant mt-2 mb-6">Get an instant valuation and professional offer today.</p>
            <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold w-full hover:opacity-90 transition-opacity">Start Valuation</button>
          </div>
          {/* Side Card 3 */}
          <div className="md:col-span-4 bg-surface-container-low rounded-lg overflow-hidden flex flex-col group border border-outline-variant/30 cursor-pointer" onClick={() => navigate('/browse')}>
            <div className="h-64 relative overflow-hidden">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="white luxury suv" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDohnWLWSsgc_C3H_JSergtxeKybok0qzPPo5Y4I9iEo66o_0_JEUvbe9v7TEOQSST8-C99AhHdQc9PBDQEIoPlaVtXTVWG-RPW5XhzYEoaseNzQX6qR7abTIGXlnM5p4I00L-xc5KLXxuJQxmWC52Ov1hnzHjHkYgHbvNl7zdaxO2VYZkbhjSw4gdTXnlX-n-Ea1f-vRGFDIY_KDMZNbt0XYmcwAErIc_ldYwmWR-yHVhexym0oSwcKAm5I-yHUZSH4RGI-k9jvNU"/>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-on-surface">Range Rover Sport</h3>
                <p className="text-on-surface-variant mt-1">2023 | Fuji White</p>
              </div>
              <p className="text-2xl font-black text-primary mt-4">$98,000</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-black text-on-surface tracking-tighter">Why Choose CarBazzar</h2>
            <p className="text-on-surface-variant mt-4">We redefine the car buying experience with professional standards and unparalleled transparency.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center p-8 bg-surface rounded-lg border border-outline-variant/20 shadow-sm">
              <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl" data-icon="verified">verified</span>
              </div>
              <h4 className="text-xl font-bold text-on-surface mb-3">Certified Quality</h4>
              <p className="text-on-surface-variant leading-relaxed">Every vehicle undergoes a rigorous 150-point inspection by master technicians to ensure peak performance.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-surface rounded-lg border border-outline-variant/20 shadow-sm">
              <div className="w-16 h-16 bg-secondary-container rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary text-3xl" data-icon="payments">payments</span>
              </div>
              <h4 className="text-xl font-bold text-on-surface mb-3">Transparent Pricing</h4>
              <p className="text-on-surface-variant leading-relaxed">No hidden fees or negotiation stress. Our data-driven pricing ensures you get the best market value every time.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-surface rounded-lg border border-outline-variant/20 shadow-sm">
              <div className="w-16 h-16 bg-tertiary-container rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary text-3xl" data-icon="support_agent">support_agent</span>
              </div>
              <h4 className="text-xl font-bold text-on-surface mb-3">Lifetime Support</h4>
              <p className="text-on-surface-variant leading-relaxed">From financing to maintenance, our concierge team is with you for every mile of your journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-screen-2xl mx-auto px-6 py-24">
        <div className="relative bg-on-background rounded-lg p-12 md:p-20 overflow-hidden">
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 hidden md:block">
            <img className="w-full h-full object-cover" alt="abstract close-up of a classic sports car headlights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqoxhCNJp16w8kb-yGJ0a83U9FzIsNdKR4_jvvVPaj9kJh-CszJE-XIFIMrA7XnAiy1UlludJA8yZ7xQIVDLSNGY8_RozDjmYyoLG6DO4suz0aKqnuSIij5sVn50Oezp1K5WjXfaBaSAToEycLfY_8ZwHT8mfSJQ7bmnpOpe3anvv76e6J8VNbyHhTNcB3VXlcesTp1Nxgmn69oaTUjvIp7icKV7SWPp6EM6duvl1ce6papne-dY2yOsB5LpFbgasdT9xU7wpwG7Q"/>
          </div>
          <div className="relative z-10 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to find your <br/>perfect match?</h2>
            <p className="text-stone-400 text-lg mb-10">Join thousands of happy drivers who found their dream car through CarBazzar's premium marketplace.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => navigate('/browse')} className="bg-primary text-on-primary px-10 py-4 rounded font-bold text-lg hover:scale-105 transition-transform">Browse Inventory</button>
              <button onClick={() => window.location.href='mailto:support@carbazzar.com'} className="bg-transparent border-2 border-white/20 text-white px-10 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">Contact Expert</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
