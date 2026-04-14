import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main className="bg-background text-on-background min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-surface-container py-24 md:py-32 px-6">
        <div className="max-w-screen-xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-on-surface tracking-tighter mb-6">
            Pioneering the Future of <br className="hidden md:block"/> <span className="text-tertiary">Pre-Owned Luxury</span>.
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            At CarBazzar, we’re not just selling cars; we’re curating experiences. Founded on the principles of absolute transparency, premier quality, and customer obsession.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-screen-xl mx-auto px-6 py-20 border-b border-outline-variant/30">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-5xl font-black text-primary mb-2">10k+</h3>
            <p className="text-on-surface-variant font-medium">Vehicles Sold</p>
          </div>
          <div>
            <h3 className="text-5xl font-black text-secondary mb-2">150</h3>
            <p className="text-on-surface-variant font-medium">Point Inspection</p>
          </div>
          <div>
            <h3 className="text-5xl font-black text-tertiary mb-2">99%</h3>
            <p className="text-on-surface-variant font-medium">Customer Satisfaction</p>
          </div>
          <div>
            <h3 className="text-5xl font-black text-primary mb-2">24/7</h3>
            <p className="text-on-surface-variant font-medium">Expert Support</p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 max-w-screen-xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-on-surface mb-6 tracking-tight">Our Mission</h2>
          <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
            We believe that buying a high-end used car should feel just as premium as buying a new one. By eliminating the aggressive sales tactics and opaque pricing models of the past, we've built a data-driven platform that empowers the buyer.
          </p>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Every vehicle in our collection is meticulously sourced, painstakingly inspected, and brilliantly presented. Welcome to the new standard.
          </p>
        </div>
        <div className="bg-surface-container-low rounded-2xl overflow-hidden shadow-lg border border-outline-variant/30 h-96">
          <img 
            src="https://images.unsplash.com/photo-1560069343-6c7c25fc4dc2?auto=format&fit=crop&w=1200&q=80" 
            alt="Dealership professional turning over keys" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Join CTA */}
      <section className="bg-primary text-on-primary py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-black mb-6">Experience the Difference</h2>
          <p className="text-lg mb-8 text-on-primary/80">Join the thousands of drivers who have already upgraded their car buying journey.</p>
          <Link to="/browse" className="inline-block bg-surface text-primary px-8 py-4 rounded font-bold text-lg hover:bg-surface-dim transition-colors shadow-lg">
            Browse Our Inventory
          </Link>
        </div>
      </section>

    </main>
  );
};

export default About;
