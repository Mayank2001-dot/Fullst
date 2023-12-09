// components/Filter.js
import React from 'react';

const Filter = ({ domains, genders, availabilities, selectedFilters, onFilterSelect, onFilterClear }) => {
  return (
    <div>
      <h4>Filter:</h4>

      {/* Domain filter */}
      <div>
        <h5>Domain:</h5>
        {domains.map((domain) => (
          <div key={domain} className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value={domain}
              checked={selectedFilters.domains.includes(domain)}
              onChange={() => onFilterSelect('domains', domain)}
            />
            <label className="form-check-label">{domain}</label>
          </div>
        ))}
      </div>

      {/* Gender filter */}
      <div>
        <h5>Gender:</h5>
        {genders.map((gender) => (
          <div key={gender} className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value={gender}
              checked={selectedFilters.genders.includes(gender)}
              onChange={() => onFilterSelect('genders', gender)}
            />
            <label className="form-check-label">{gender}</label>
          </div>
        ))}
      </div>

      {/* Availability filter */}
      <div>
        <h5>Availability:</h5>
        {availabilities.map((availability) => (
          <div key={availability} className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value={availability}
              checked={selectedFilters.availabilities.includes(availability)}
              onChange={() => onFilterSelect('availabilities', availability)}
            />
            <label className="form-check-label">{availability}</label>
          </div>
        ))}
      </div>

      {/* Clear filters button */}
      <button className="btn btn-secondary mt-3" onClick={onFilterClear}>
        Clear Filters
      </button>
    </div>
  );
};

export default Filter;
