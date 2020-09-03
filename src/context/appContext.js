import React, { useReducer, createContext } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  navers: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_NAVERS':
      return {
        ...state,
        navers: payload,
      };

    default:
      return state;
  }
};

const AppContext = createContext(initialState);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppProvider };
export default AppContext;
