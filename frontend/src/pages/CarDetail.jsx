import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Phone, Navigation } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import './CarDetail.css';

const CarDetail = () => {
  const { id } = useParams();
  const { user } = useAuth();
  
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const res = await axios.get(`/api/cars/${id}`);
        setCar(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCar();
  }, [id]);

  if (loading) return <div className="container center-msg">Loading...</div>;
  if (!car) return <div className="container center-msg">Car not found.</div>;

  const mainImage = car.images && car.images.length > 0 
    ? car.images[0] 
    : 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=1200&q=80';

  return (
    <div className="car-detail-page container">
      
      <div className="detail-hero-box">
        <div className="hero-img-inner">
          <img src={mainImage} alt={car.model} className="car-main-img" />
        </div>
      </div>

      <div className="detail-layout">
        
        {/* Left Side: Specs and Seller */}
        <div className="detail-main">
          
          <div className="detail-header-block">
            <span className="stock-tag">CERTIFIED PRE-OWNED</span>
            <div className="title-price-row">
              <h1 className="detail-title">{car.year} {car.brand} {car.model}</h1>
              <span className="price-value">${(car.price || 0).toLocaleString()}</span>
            </div>
            <p className="detail-subtitle">{car.transmission} • {car.fuelType} • {(car.mileage || 0).toLocaleString()} miles</p>
          </div>

          <div className="detail-section">
            <h2 className="stitch-subheading">Detailed Specifications</h2>
            <div className="specs-list">
              <div className="spec-col">
                <div className="spec-pair">
                  <span className="spec-lbl">Engine</span>
                  <span className="spec-val">Standard {car.fuelType}</span>
                </div>
                <div className="spec-pair">
                  <span className="spec-lbl">Mileage</span>
                  <span className="spec-val">{(car.mileage || 0).toLocaleString()} mi</span>
                </div>
              </div>
              <div className="spec-col">
                <div className="spec-pair">
                  <span className="spec-lbl">Transmission</span>
                  <span className="spec-val">{car.transmission}</span>
                </div>
                <div className="spec-pair">
                  <span className="spec-lbl">0-60 MPH</span>
                  <span className="spec-val">4.5 seconds</span>
                </div>
              </div>
            </div>
          </div>

          {/* Seller Description exactly matching Stitch Peach box */}
          <div className="seller-desc-stitch">
            <h2 className="stitch-subheading" style={{marginBottom: '16px'}}>Seller's Description</h2>
            <p className="desc-text-stitch">
              {car.description || 'No description provided by the seller.'}
            </p>
          </div>

        </div>

        {/* Right Side: Action Cards */}
        <div className="detail-sidebar">
           <div className="action-buttons-group">
              <button className="btn btn-primary action-btn">Book a Test Drive</button>
              <button className="btn btn-outline action-btn">Calculate Financing</button>
           </div>

           <div className="stitch-seller-card glass">
             <div className="seller-header">
               <div className="seller-avatar">{car.seller?.name?.charAt(0) || 'U'}</div>
               <div className="seller-info">
                 <h4>{car.seller?.name || 'Private Seller'}</h4>
                 <span className="verify-tag">Verified Member</span>
               </div>
               <div className="call-btn-circle">
                 <Phone size={16} />
               </div>
             </div>
             <p className="seller-address"><Navigation size={14} style={{marginRight: '6px'}}/> Local Dealership Network</p>
           </div>
        </div>

      </div>
    </div>
  );
};

export default CarDetail;
