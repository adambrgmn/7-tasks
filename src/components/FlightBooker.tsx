import React, { useState } from 'react';
import { RouteComponentProps } from '@reach/router';

enum FlighOption {
  OneWay = 'one-way',
  Return = 'return',
}

const flightOptions = [
  { value: FlighOption.OneWay, label: 'one-way flight' },
  { value: FlighOption.Return, label: 'return flight' },
];

export default function FlightBooker(_: RouteComponentProps) {
  const [option, setOption] = useState(FlighOption.OneWay);

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOption(e.target.value as FlighOption);
  };

  return (
    <form onSubmit={e => e.preventDefault()}>
      <div>
        <select value={option} onChange={handleOptionChange}>
          {flightOptions.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <input type="date" />
      </div>
      <div>
        <input type="date" />
      </div>
      <button type="submit">Book</button>
    </form>
  );
}
