import { createContext, useReducer } from 'react';
import flightReducer from './UserReducer';

const FlightContext = createContext();

export const FlightProvider = ({ children }) => {
    const initialState = {
        user: {},
        users: [],
        repos: [],
        isLoading: false,
    };

    const [state, dispatch] = useReducer(flightReducer, initialState);

    return (
        <FlightContext.Provider
            value={{
                ...state,
                dispatch,
            }}>
            {children}
        </FlightContext.Provider>
    );
};

export default FlightContext;
