import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Filter } from 'lucide-react';
import CarCard from '../components/CarCard';
import './Browse.css';

const Browse = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialSearch = searchParams.get('search') || '';
  const initialBrand = searchParams.get('brand') || '';

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [filters, setFilters] = useState({
    search: initialSearch,
    brand: initialBrand,
    fuelType: '',
    minPrice: '',
    maxPrice: '',
    sort: 'recent',
    transmission: ''
  });

  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  useEffect(() => {
    fetchCars();
  }, [filters]);

  const fetchCars = async () => {
    setLoading(true);
    try {
      const query = new URLSearchParams();
      if (filters.search) query.append('search', filters.search);
      if (filters.brand) query.append('brand', filters.brand);
      if (filters.fuelType) query.append('fuelType', filters.fuelType);
      if (filters.minPrice) query.append('minPrice', filters.minPrice);
      if (filters.maxPrice) query.append('maxPrice', filters.maxPrice);
      if (filters.sort) query.append('sort', filters.sort);

      const res = await axios.get(`/api/cars?${query.toString()}`);
      // Hack for frontend filtering of transmission since it wasn't in the original backend query API (maybe)
      let data = res.data;
      if (filters.transmission) {
        data = data.filter(c => c.transmission === filters.transmission);
      }
      setCars(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="browse-page container">
      <div className="browse-layout">
        
        {/* Sidebar Filters matched exactly to Stitch */}
        <aside className={`filters-sidebar ${showFiltersMobile ? 'active' : ''}`}>
          <div className="sidebar-header">
            <h2 className="sidebar-main-title">Filters</h2>
          </div>

          <div className="filter-group">
            <h3 className="filter-title-peach">Brand</h3>
            <select name="brand" value={filters.brand} onChange={handleFilterChange} className="form-input filter-input">
              <option value="">All Brands</option>
              <option value="BMW">BMW</option>
              <option value="Mercedes-Benz">Mercedes-Benz</option>
              <option value="Audi">Audi</option>
              <option value="Tesla">Tesla</option>
              <option value="Porsche">Porsche</option>
              <option value="Toyota">Toyota</option>
            </select>
          </div>

          <div className="filter-group">
            <h3 className="filter-title-peach">Price Range</h3>
            <div className="price-inputs">
              <input type="number" name="minPrice" value={filters.minPrice} onChange={handleFilterChange} placeholder="Min" className="form-input filter-input" />
              <input type="number" name="maxPrice" value={filters.maxPrice} onChange={handleFilterChange} placeholder="Max" className="form-input filter-input" />
            </div>
          </div>

          <div className="filter-group">
            <h3 className="filter-title-peach">Transmission</h3>
            <div className="pills-group-stitch">
              {['Manual', 'Automatic'].map(tr => (
                <button 
                  key={tr}
                  onClick={() => setFilters({...filters, transmission: filters.transmission === tr ? '' : tr})}
                  className={`stitch-pill ${filters.transmission === tr ? 'active' : ''}`}
                >
                  {tr}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <h3 className="filter-title-peach">Fuel Type</h3>
            <div className="pills-group-stitch fuel-pills">
              {['Petrol', 'Diesel', 'Electric', 'Hybrid'].map(ft => (
                <button 
                  key={ft}
                  onClick={() => setFilters({...filters, fuelType: filters.fuelType === ft ? '' : ft})}
                  className={`stitch-pill ${filters.fuelType === ft ? 'active' : ''}`}
                >
                  {ft}
                </button>
              ))}
            </div>
          </div>
          
          <button 
            className="btn btn-primary apply-filters-btn-stitch" 
            onClick={() => console.log("Applied", filters)}
          >
            Apply Filters
          </button>
        </aside>

        {/* Results Grid */}
        <main className="results-container">
          <div className="results-header-box">
            <h1 className="page-title">Available Cars</h1>
            <div className="sort-box">
              <span className="sort-label">Sort by:</span>
              <select name="sort" value={filters.sort} onChange={handleFilterChange} className="sort-select">
                <option value="recent">Newest Arrivals</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          <button 
            className="btn btn-outline mobile-filter-btn"
            onClick={() => setShowFiltersMobile(!showFiltersMobile)}
          >
            <Filter size={18} /> Filters
          </button>

          {loading ? (
            <div className="loading-spinner">Loading vehicles...</div>
          ) : cars.length > 0 ? (
            <div className="cards-grid browse-grid">
              {cars.map(car => (
                <CarCard key={car._id} car={car} />
              ))}
            </div>
          ) : (
            <div className="no-results glass">
              <h2>No cars found</h2>
              <p>Try adjusting your search filters.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Browse;
