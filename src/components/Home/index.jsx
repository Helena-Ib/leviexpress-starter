import React, { useState, useEffect } from 'react';
import { JourneyPicker } from '../JourneyPicker';
import { JourneyDetail } from '../JourneyDetail';

export const Home = () => {
  const [journey, setJourney] = useState(null);

  const handleOnJourneyChange = (fromCity, toCity, date) => {
    fetch(
      `https://leviexpress-backend.herokuapp.com/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${date}`,
    )
      .then((response) => response.json())
      .then((json) => setJourney(json.data));
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleOnJourneyChange} />
      {journey !== null && <JourneyDetail journey={journey} />}
    </main>
  );
};
