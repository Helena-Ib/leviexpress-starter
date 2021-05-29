import React, { useState } from 'react';
import { BusStop } from '../BusStop';

import './style.css';

export const JourneyDetail = ({ journey }) => {
  return (
    <div className="journey-detail container">
      <h2>Podrobnosti cesty</h2>
      <div className="stops">
        {journey.stops.map((zastavka) => (
          <BusStop
            key={zastavka.code}
            name={zastavka.name}
            station={zastavka.station}
            time={zastavka.time}
          />
        ))}
      </div>
    </div>
  );
};
