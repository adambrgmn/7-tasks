import React, { useState } from 'react';
import { RouteComponentProps } from '@reach/router';

export default function Counter(_: RouteComponentProps) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <input type="number" readOnly value={count} />
      <button type="button" onClick={() => setCount(count + 1)}>
        Count
      </button>
    </div>
  );
}
