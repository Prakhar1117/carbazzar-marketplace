import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { User, Heart, Car } from 'lucide-react';
import CarCard from '../components/CarCard';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('listings');
  const [myListings, setMyListings] = useState([]);
  const [savedCars, setSavedCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    const fetchDashboardData = async () => {
      setLoading(true);
      try {
        const [listingsRes, savedRes] = await Promise.all([
          axios.get(`/api/cars`),
          axios.get('/api/cars/user/saved')
        ]);
        
        // Filter my listings
        const mine = listingsRes.data.filter(car => car.seller?._id === user._id || car.seller === user._id);
        setMyListings(mine);
        
        setSavedCars(savedRes.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchDashboardData();
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="dashboard-page container">
      {/* Dashboard Header Info */}
      <div className="dashboard-header glass">
        <div className="dashboard-user">
          <div className="user-avatar-large">
            <User size={40} />
          </div>
          <div>
            <h1 className="dashboard-title">Welcome, {user.name}</h1>
            <p className="dashboard-email">{user.email}</p>
          </div>
        </div>
        <div className="dashboard-stats">
          <div className="stat-box">
            <span className="stat-num">{myListings.length}</span>
            <span className="stat-label">Active Listings</span>
          </div>
          <div className="stat-box">
            <span className="stat-num">{savedCars.length}</span>
            <span className="stat-label">Saved Cars</span>
          </div>
        </div>
      </div>

      {/* Dashboard Tabs */}
      <div className="dashboard-tabs">
        <button 
          className={`tab-btn ${activeTab === 'listings' ? 'active' : ''}`}
          onClick={() => setActiveTab('listings')}
        >
          <Car size={18} /> My Listings
        </button>
        <button 
          className={`tab-btn ${activeTab === 'saved' ? 'active' : ''}`}
          onClick={() => setActiveTab('saved')}
        >
          <Heart size={18} /> Saved Cars
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {loading ? (
          <div className="loading-spinner">Loading...</div>
        ) : activeTab === 'listings' ? (
          <div className="listings-tab">
            {myListings.length > 0 ? (
              <div className="cards-grid">
                {myListings.map(car => (
                  <CarCard key={car._id} car={car} />
                ))}
              </div>
            ) : (
              <div className="empty-state glass">
                <Car size={48} className="empty-icon" />
                <h3>No Listings Yet</h3>
                <p>You haven't posted any cars for sale.</p>
                <button className="btn btn-primary" onClick={() => navigate('/sell')}>Sell a Car</button>
              </div>
            )}
          </div>
        ) : (
          <div className="saved-tab">
            {savedCars.length > 0 ? (
              <div className="cards-grid">
                {savedCars.map(car => (
                  <CarCard key={car._id} car={car} setSavedCars={setUser} />
                ))}
              </div>
            ) : (
              <div className="empty-state glass">
                <Heart size={48} className="empty-icon" />
                <h3>No Saved Cars</h3>
                <p>You haven't saved any vehicles to your favorites.</p>
                <button className="btn btn-outline" onClick={() => navigate('/browse')}>Browse Cars</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
