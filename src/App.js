import React, {useState} from 'react';
import {RouterProvider} from 'react-router-dom';
import router from './router/router';
import nameContext from './context/nameContext';

function App() {
  const [name] = useState({
    organ : "Angular",
    repos : "Angular-cli",
  });
  const {organ, repos} = name;

  return (
    <div>
      <nameContext.Provider value={{organ, repos}}>
        <RouterProvider router={router} />
      </nameContext.Provider>
    </div>
  );
}

export default App;
