import React from 'react';

import GlobalStyles from '@components/GlobalStyles';
import { AppProvider } from '@context/appContext.js';
import Router from './router';

function App() {
  return (
    <>
      <GlobalStyles />
      <AppProvider>
        <Router />
      </AppProvider>
    </>
  );

}

export default App;
