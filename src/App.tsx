import React from 'react';
import { Link, Router, RouteComponentProps } from '@reach/router';

const pages: {
  path: string;
  Component: React.ComponentType<RouteComponentProps>;
}[] = [
  {
    path: 'counter',
    Component: React.lazy(() => import('./components/Counter')),
  },
  {
    path: 'temperature-converter',
    Component: React.lazy(() => import('./components/TemperatureConverter')),
  },
  {
    path: 'flight-booker',
    Component: React.lazy(() => import('./components/FlightBooker')),
  },
];

const App: React.FC = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            {pages.map(({ path }) => (
              <li key={path}>
                <Link to={path}>{path}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <React.Suspense fallback={<p>Loading...</p>}>
        <Router>
          {pages.map(({ path, Component }) => (
            <Component key={path} path={path} />
          ))}
        </Router>
      </React.Suspense>
    </>
  );
};

export default App;
