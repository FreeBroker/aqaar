import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ShowUnits from "../Components/ShowUnits";
import Spinner from '../Components/Spinner';

export default function FilteredUnits(props) {
  const { t } = useTranslation();
  const { state } = useLocation();
  const [sortCriteria, setSortCriteria] = useState('price_asc');
  const [filterPrice, setFilterPrice] = useState(null);

  const sortUnits = (units, criteria) => {
    return units.sort((a, b) => {
      switch (criteria) {
        case 'price_asc':
          return a.price.value - b.price.value;
        case 'price_desc':
          return b.price.value - a.price.value;
        case 'date_asc':
          return new Date(a.date) - new Date(b.date);
        case 'date_desc':
          return new Date(b.date) - new Date(a.date);
        default:
          return 0;
      }
    });
  };

  const filterUnitsByPrice = (units, maxPrice) => {
    if (maxPrice) {
      return units.filter(unit => unit.price.value <= maxPrice);
    }
    return units;
  };

  const sortedUnits = state?.units ? sortUnits([...state.units], sortCriteria) : [];
  const filteredUnits = filterUnitsByPrice(sortedUnits, filterPrice);

  return (
    <div>
      <div className="d-flex justify-content-between mb-3 mx-4">
        <div>
          <label style={{ color: 'white' }} htmlFor="sortCriteria" className="m-2">{t('sort_by')}:</label>
          <select
            id="sortCriteria"
            value={sortCriteria}
            onChange={(e) => setSortCriteria(e.target.value)}
          >
            <option value="price_asc">{t('Price (min to max)')}</option>
            <option value="price_desc">{t('Price (max to min)')}</option>
            <option value="date_asc">{t('Date (oldest to newest)')}</option>
            <option value="date_desc">{t('Date (newest to oldest)')}</option>
          </select>
        </div>
      </div>
      <ShowUnits
        title={state?.units ? t('search_results') : t('empty_query')}
        units={filteredUnits}
        update_favorites={props.update_favorites}
        favorites={props.favorites}
      />
    </div>
  );
}
