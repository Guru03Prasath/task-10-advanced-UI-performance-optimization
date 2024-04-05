// App.js
import React, { lazy, Suspense } from 'react';

const LazyLoadedComponent = lazy(() => import('./LazyLoadedComponent'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyLoadedComponent />
      </Suspense>
    </div>
  );
}

export default App;