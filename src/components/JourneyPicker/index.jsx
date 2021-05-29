import React, { useEffect, useState } from 'react';
import mapImage from './img/map.svg';
import './style.css';

export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');
  const [cities, setCities] = useState([]);
  const [dates, setDates] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fromCity, toCity, date);
  };

  const handleChange = (event) => {
    setFromCity(event.target.value);
  };

  const handleChangeToCity = (event) => {
    setToCity(event.target.value);
  };

  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };

  useEffect(() => {
    fetch(`https://leviexpress-backend.herokuapp.com/api/cities`)
      .then((response) => response.json())
      .then((json) => setCities(json.data));
  }, []);

  const CityOptions = ({ cities }) => {
    return (
      <>
        <option value="">Vyberte</option>
        {cities.map((mesto) => (
          <option key={mesto.code} value={mesto.code}>
            {mesto.name}
          </option>
        ))}
      </>
    );
  };

  useEffect(() => {
    fetch(`https://leviexpress-backend.herokuapp.com/api/dates`)
      .then((response) => response.json())
      .then((json) => setDates(json.data));
  }, []);

  const DateOptions = ({ dates }) => {
    return (
      <>
        <option value="">Vyberte</option>
        {dates.map((datum) => (
          <option key={datum.dateBasic} value={datum.dateBasic}>
            {datum.dateExtended}
          </option>
        ))}
      </>
    );
  };

  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form onSubmit={handleSubmit} className="journey-picker__form">
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <select onChange={handleChange} value={fromCity}>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select onChange={handleChangeToCity} value={toCity}>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select onChange={handleChangeDate} value={date}>
              <DateOptions dates={dates} />
            </select>
          </label>
          <div className="journey-picker__controls">
            <button className="btn" type="submit">
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src={mapImage} />
      </div>
    </div>
  );
};
