import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from '@reach/router';

const celsiusToFahrenheit = (celsius: number) =>
  Math.round(celsius * (9 / 5) + 32);
const fahrenheitToCelsius = (fahrenheit: number) =>
  Math.round((fahrenheit - 32) * (5 / 9));

export default function TemperatureConverter(_: RouteComponentProps) {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(celsiusToFahrenheit(0));

  const handleChange = (set: React.Dispatch<React.SetStateAction<number>>) => (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = Number.parseInt(e.currentTarget.value, 10);
    if (Number.isNaN(value)) return;

    set(value);
  };

  useEffect(() => setFahrenheit(celsiusToFahrenheit(celsius)), [celsius]);
  useEffect(() => setCelsius(fahrenheitToCelsius(fahrenheit)), [fahrenheit]);

  return (
    <div>
      <label>
        <input
          type="number"
          value={celsius}
          onChange={handleChange(setCelsius)}
        />{' '}
        celsius
      </label>

      <span> = </span>

      <label>
        <input
          type="number"
          value={fahrenheit}
          onChange={handleChange(setFahrenheit)}
        />{' '}
        fahrenheit
      </label>
    </div>
  );
}
