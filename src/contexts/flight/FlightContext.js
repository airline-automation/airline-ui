import { createContext, useReducer, useContext } from 'react';
import flightReducer from './FlightReducer';

const FlightContext = createContext();

export const FlightProvider = ({ children }) => {
    const initialState = {
        departure: '',
        destionation: '',
        date: '',
        flight_type: [
            {
                label: 'Gidiş-Dönüş',
                key: 'gidis-donus',
            },
            {
                label: 'Tek yön',
                key: 'tek-yon',
            },
            {
                label: 'Çoklu uçuş',
                key: 'coklu-ucus',
            },
        ],
        passengers: {
            adult: 0,
            child: 0,
            baby: 0,
            student: 0,
        },
        flight_class: '', // eco, business
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

export { useContext };

export default FlightContext;

// useEffect(() => {
//     if(localStorage.getItem('name')){
//         setTest(localStorage.getItem('name'));
//     }
// }, []);

// useEffect(() => {
//     if(test && test.length > 0){
//         localStorage.setItem('name', test);
//     }
// }, [test]);
