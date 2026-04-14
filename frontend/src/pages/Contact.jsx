import { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const firstName = fd.get('firstName');
    const lastName = fd.get('lastName');
    const email = fd.get('email');
    const inquiry = fd.get('inquiry');
    const message = fd.get('message');
    
    // Open default email client
    window.location.href = `mailto:b241198@skit.ac.in?subject=${encodeURIComponent(inquiry)} - ${encodeURIComponent(firstName)} ${encodeURIComponent(lastName)}&body=${encodeURIComponent(message + '\n\nFrom: ' + email)}`;
    
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    e.target.reset();
  };

  return (
    <main className="bg-background text-on-background min-h-screen py-16 px-6">
      <div className="max-w-screen-xl mx-auto">
        
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-on-surface tracking-tighter mb-4">Contact Our Experts</h1>
          <p className="text-lg text-on-surface-variant">We're here to help you navigate your next luxury vehicle purchase. Reach out to us below.</p>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          
          {/* Contact Info */}
          <div className="md:col-span-5 bg-surface-container-high rounded-2xl p-8 border border-outline-variant/30">
            <h3 className="text-2xl font-bold text-on-surface mb-8">Get In Touch</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
                <div>
                  <h4 className="font-bold text-on-surface">Headquarters</h4>
                  <p className="text-on-surface-variant mt-1">SKIT,Jagatpura<br/>Jaipur,Rajasthan,302022</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary text-3xl">call</span>
                <div>
                  <h4 className="font-bold text-on-surface">Phone</h4>
                  <p className="text-on-surface-variant mt-1">+91 1234567809<br/>Mon-Sun, 10am - 7pm IST</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-tertiary text-3xl">mail</span>
                <div>
                  <h4 className="font-bold text-on-surface">Email</h4>
                  <p className="text-on-surface-variant mt-1">[b241198@skit.ac.in]<br/>[relaxplay1117]</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-outline-variant/30">
              <h4 className="font-bold text-on-surface mb-4">Follow Us</h4>
              <div className="flex gap-4 text-on-surface-variant">
                 <Link to="#" className="hover:text-primary transition-colors"><span className="material-symbols-outlined">public</span></Link>
                 <Link to="#" className="hover:text-primary transition-colors"><span className="material-symbols-outlined">share</span></Link>
                 <Link to="#" className="hover:text-primary transition-colors"><span className="material-symbols-outlined">forum</span></Link>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-7 bg-surface rounded-2xl p-8 md:p-10 shadow-sm border border-outline-variant/20">
            <h3 className="text-2xl font-bold text-on-surface mb-6">Send a Message</h3>
            
            {sent ? (
              <div className="bg-primary-container text-on-primary-container p-6 rounded-lg text-center">
                <span className="material-symbols-outlined text-4xl mb-2 text-primary">check_circle</span>
                <h4 className="font-bold text-lg">Message Prepared!</h4>
                <p>Your email client should have opened to send the message.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-on-surface-variant">First Name</label>
                    <input required type="text" name="firstName" className="bg-surface-container-low border-none rounded p-3 focus:ring-2 focus:ring-primary text-on-surface" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-on-surface-variant">Last Name</label>
                    <input required type="text" name="lastName" className="bg-surface-container-low border-none rounded p-3 focus:ring-2 focus:ring-primary text-on-surface" />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-on-surface-variant">Email Address</label>
                  <input required type="email" name="email" className="bg-surface-container-low border-none rounded p-3 focus:ring-2 focus:ring-primary text-on-surface" />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-on-surface-variant">Inquiry Type</label>
                  <select name="inquiry" className="bg-surface-container-low border-none rounded p-3 focus:ring-2 focus:ring-primary text-on-surface">
                    <option>General Inquiry</option>
                    <option>Vehicle Sales</option>
                    <option>Trade-In Valuation</option>
                    <option>Support & Feedback</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-on-surface-variant">Message</label>
                  <textarea required name="message" rows="5" className="bg-surface-container-low border-none rounded p-3 focus:ring-2 focus:ring-primary text-on-surface"></textarea>
                </div>

                <button type="submit" className="w-full bg-primary text-on-primary py-4 rounded font-bold text-lg hover:opacity-90 transition-opacity">
                  Send Message
                </button>
              </form>
            )}
          </div>
          
        </div>
      </div>
    </main>
  );
};

export default Contact;
