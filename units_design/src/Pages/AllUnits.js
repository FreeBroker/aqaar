import React, { useState, useEffect } from "react";
import { getall } from "../api/unit";
import ShowUnits from "../Components/ShowUnits";
import { useTranslation } from "react-i18next";
import Spinner from '../Components/Spinner';

export default function AllUnits({ update_favorites, favorites }) {
  const [units, setUnits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t } = useTranslation();
  const [sortCriteria, setSortCriteria] = useState('date_desc');
  const [filterPrice, setFilterPrice] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchUnits = async () => {
      try {
        const result = await getall();
        if (isMounted) {
          setUnits(result.data.response);
        }
      } catch (error) {
        console.error("Error fetching units:", error);
        if (isMounted) {
          setError(t('error_fetching_units'));
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchUnits();
    return () => {
      isMounted = false;
    };
  }, [t]);

  if (loading) {
    return (
      <div>
        <Spinner />
        <p>{t('loading')}...</p>
      </div>
    );
  }

  if (error) {
    return <div>{t('error')}: {error}</div>;
  }

  const sortUnits = (units, criteria) => {
    return [...units].sort((a, b) => {
      switch (criteria) {
        case 'price_asc':
          return a.price.value - b.price.value;
        case 'price_desc':
          return b.price.value - a.price.value;
        case 'date_desc':
          return new Date(b.date) - new Date(a.date);
          case 'date_asc':
          return new Date(a.date) - new Date(b.date);
        default:
          return 0;
      }
    });
  };

  const filterUnitsByPrice = (units, maxPrice) => {
    if (maxPrice !== null) {
      return units.filter(unit => unit.price.value <= maxPrice);
    }
    return units;
  };

  const sortedUnits = sortUnits(units, sortCriteria);
  const filteredUnits = filterUnitsByPrice(sortedUnits, filterPrice);

  return (
    <div>
      <div className="d-flex justify-content-between mb-3 mx-4">
        <div>
          <label htmlFor="sortCriteria" className="m-2" style={{ color: 'white' }}>{t('sort_by')}</label>
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
        title={t('all_units')}
        units={filteredUnits}
        update_favorites={update_favorites}
        favorites={favorites}
      />
    </div>
  );
}
