import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await register(formData.name, formData.email, formData.password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to register');
      setLoading(false);
    }
  };

  return (
    <main className="min-h-[85vh] flex items-center justify-center p-6 bg-background">
      <div className="w-full max-w-md bg-surface border border-outline-variant/30 rounded-2xl shadow-xl overflow-hidden mt-8">
        <div className="p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-container rounded-full mb-4">
              <span className="material-symbols-outlined text-secondary text-3xl">how_to_reg</span>
            </div>
            <h2 className="text-2xl font-black text-on-surface">Create Account</h2>
            <p className="text-on-surface-variant mt-2 font-medium">Join the premium CarBazzar marketplace</p>
          </div>
          
          {error && <div className="bg-error-container text-on-error-container p-4 rounded-lg mb-6 text-sm font-bold text-center">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Full Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                className="bg-surface-container-low border-none rounded p-3 focus:ring-2 focus:ring-primary text-on-surface outline-none" 
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                className="bg-surface-container-low border-none rounded p-3 focus:ring-2 focus:ring-primary text-on-surface outline-none" 
                placeholder="you@example.com"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Password</label>
              <input 
                type="password" 
                name="password" 
                value={formData.password} 
                onChange={handleChange} 
                required 
                className="bg-surface-container-low border-none rounded p-3 focus:ring-2 focus:ring-primary text-on-surface outline-none" 
                placeholder="••••••••"
                minLength="6"
              />
            </div>
            
            <button type="submit" className="w-full bg-primary text-on-primary py-4 rounded font-bold text-lg hover:opacity-90 transition-opacity mt-4" disabled={loading}>
              {loading ? 'Creating...' : 'Create Account'}
            </button>
          </form>

        </div>
        <div className="bg-surface-container-low p-6 text-center border-t border-outline-variant/30">
          <p className="text-on-surface-variant text-sm font-medium">
            Already have an account? <Link to="/login" className="text-primary font-bold hover:underline">Sign In here</Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Register;
