import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { Heart, Settings2, Fuel } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './CarCard.css';

const CarCard = ({ car }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const isSavedInitial = user?.savedCars?.includes(car._id);
  const [isSaved, setIsSaved] = useState(isSavedInitial);

  const toggleSave = async (e) => {
    e.stopPropagation();
    if (!user) return alert("Please login to save cars.");
    try {
      await axios.post(`/api/cars/${car._id}/save`);
      setIsSaved(!isSaved);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCardClick = () => {
    navigate(`/car/${car._id}`);
  };

  const mainImage = car.images && car.images.length > 0 
    ? car.images[0] 
    : 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=800&q=80';

  return (
    <div className="car-card glass-interactive" onClick={handleCardClick}>
      <button 
        className={`heart-btn ${isSaved ? 'saved' : ''}`} 
        onClick={toggleSave}
      >
        <Heart size={20} fill={isSaved ? "currentColor" : "none"} />
      </button>

      <div className="car-card-img-box">
        <img src={mainImage} alt={car.model} className="car-card-img" />
      </div>

      <div className="car-card-body">
        {/* Row 1: Title and Price */}
        <div className="car-card-row-1">
          <h3 className="car-title">{car.brand} {car.model}</h3>
          <span className="car-price">${car.price.toLocaleString()}</span>
        </div>

        {/* Row 2: Year and Mileage */}
        <div className="car-card-row-2">
          <span className="car-year">{car.year}</span>
          <span className="car-dot">•</span>
          <span className="car-mileage">{car.mileage.toLocaleString()} miles</span>
        </div>

        <hr className="car-card-divider" />

        {/* Row 3: Specifications icons */}
        <div className="car-card-row-3">
          <div className="spec-tag">
            <Settings2 size={14} className="spec-icon"/>
            <span>{car.transmission}</span>
          </div>
          <div className="spec-tag">
            <Fuel size={14} className="spec-icon"/>
            <span>{car.fuelType}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
