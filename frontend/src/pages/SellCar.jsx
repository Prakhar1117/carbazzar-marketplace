import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { CheckCircle } from 'lucide-react';
import './SellCar.css';

const SellCar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: new Date().getFullYear(),
    price: '',
    fuelType: 'Petrol',
    mileage: '',
    transmission: 'Manual',
    description: '',
    images: ''
  });

  if (!user) {
    return (
      <div className="container center-msg">
        <h2>Sign in to list your vehicle</h2>
        <button className="btn btn-primary" style={{marginTop: '20px'}} onClick={() => navigate('/login')}>Go to Sign In</button>
      </div>
    );
  }

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const imagesArray = formData.images ? formData.images.split(',').map(i => i.trim()) : [];
      const payload = {
        ...formData,
        price: Number(formData.price),
        year: Number(formData.year),
        mileage: Number(formData.mileage),
        images: imagesArray.length > 0 ? imagesArray : ['https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80']
      };

      await axios.post('/api/cars', payload);
      setStep(4);
    } catch (err) {
      console.error(err);
      alert('Failed to list car');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sell-car-page container">
      <div className="sell-car-header">
        <h1 className="page-title">Turn your car into cash today.</h1>
        <p className="page-subtitle">List your vehicle in three easy steps.</p>
      </div>
      
      <div className="sell-layout">
        <div className="sell-main glass">
          {/* Timeline indicator Minimalist */}
          <div className="minimal-timeline">
            <span className={step >= 1 ? 'active' : ''}>1</span>
            <div className={`timeline-line ${step >= 2 ? 'active' : ''}`}></div>
            <span className={step >= 2 ? 'active' : ''}>2</span>
            <div className={`timeline-line ${step >= 3 ? 'active' : ''}`}></div>
            <span className={step >= 3 ? 'active' : ''}>3</span>
          </div>

          <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }}>
            {step === 1 && (
              <div className="form-step">
                <h2 className="step-heading">Car Details</h2>
                <div className="form-group row-group">
                  <div className="flex-1">
                    <label className="form-label">Make</label>
                    <input type="text" name="brand" required value={formData.brand} onChange={handleChange} className="form-input" placeholder="Brand" />
                  </div>
                  <div className="flex-1">
                    <label className="form-label">Model</label>
                    <input type="text" name="model" required value={formData.model} onChange={handleChange} className="form-input" placeholder="Model" />
                  </div>
                </div>
                <div className="form-group row-group">
                  <div className="flex-1">
                    <label className="form-label">Year of Manufacture</label>
                    <input type="number" name="year" required min="1900" max={new Date().getFullYear()} value={formData.year} onChange={handleChange} className="form-input" />
                  </div>
                  <div className="flex-1">
                    <label className="form-label" style={{color: '#ff6600', fontWeight: 'bold'}}>Listing Price ($) *</label>
                    <input type="number" name="price" required min="1" value={formData.price} onChange={handleChange} className="form-input" placeholder="Enter vehicle price" style={{fontSize: '1.1rem'}} />
                  </div>
                </div>
                <button type="button" className="btn btn-primary proceed-btn" onClick={nextStep} disabled={!formData.brand || !formData.model || !formData.price}>Proceed</button>
              </div>
            )}

            {step === 2 && (
              <div className="form-step">
                <h2 className="step-heading">Condition & Specs</h2>
                <div className="form-group row-group">
                  <div className="flex-1">
                    <label className="form-label">Fuel Type</label>
                    <select name="fuelType" value={formData.fuelType} onChange={handleChange} className="form-input">
                      <option value="Petrol">Petrol</option>
                      <option value="Diesel">Diesel</option>
                      <option value="Electric">Electric</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>
                  </div>
                  <div className="flex-1">
                    <label className="form-label">Transmission</label>
                    <select name="transmission" value={formData.transmission} onChange={handleChange} className="form-input">
                      <option value="Manual">Manual</option>
                      <option value="Automatic">Automatic</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Mileage (miles/km)</label>
                  <input type="number" name="mileage" required min="0" value={formData.mileage} onChange={handleChange} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Condition Description</label>
                  <textarea name="description" rows="4" value={formData.description} onChange={handleChange} className="form-input" placeholder="Tell us about the condition..."></textarea>
                </div>
                <div className="form-group">
                  <label className="form-label">Image URLs</label>
                  <input type="text" name="images" value={formData.images} onChange={handleChange} className="form-input" placeholder="Comma separated links" />
                </div>
                <div className="action-row">
                  <button type="button" className="btn btn-outline" onClick={prevStep}>Back</button>
                  <button type="button" className="btn btn-primary" onClick={nextStep} disabled={!formData.mileage}>Preview</button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="form-step">
                <h2 className="step-heading">Confirm Listing</h2>
                <div className="preview-sum">
                  <h3>{formData.brand} {formData.model} ({formData.year})</h3>
                  <div className="h-divider"></div>
                  <p><strong>Price:</strong> ${Number(formData.price).toLocaleString()}</p>
                  <p><strong>Mileage:</strong> {formData.mileage}</p>
                  <p><strong>Fuel:</strong> {formData.fuelType} | <strong>Transmission:</strong> {formData.transmission}</p>
                </div>
                <div className="action-row">
                  <button type="button" className="btn btn-outline" onClick={prevStep}>Edit</button>
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? 'Publishing...' : 'Publish'}
                  </button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="form-step center-content">
                <CheckCircle size={64} className="success-icon" />
                <h2 className="step-heading">Success!</h2>
                <p style={{marginBottom: '24px'}}>Your car has been listed.</p>
                <div className="action-row-center">
                  <button type="button" className="btn btn-outline" onClick={() => navigate('/dashboard')}>Dashboard</button>
                  <button type="button" className="btn btn-primary" onClick={() => navigate('/browse')}>View Cars</button>
                </div>
              </div>
            )}
          </form>
        </div>

        <div className="sell-info-sidebar">
          <div className="info-box-peach">
            <h3>Why CarBazzar?</h3>
            <ul>
              <li>Massive audience reach</li>
              <li>Secure escrow payments</li>
              <li>Dedicated support team</li>
            </ul>
          </div>
          <div className="info-box-white glass">
            <h3>Seller Tips</h3>
            <p>Upload high quality images of the interior and exterior to increase conversion rates.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellCar;
