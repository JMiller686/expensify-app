import { createStore } from 'redux';


// Action Generators - functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: "INCREMENT",
    incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: "DECREMENT",
    decrementBy: decrementBy
});

const setCount = ({count}) => ({
    type: "SET",
    setCount: count
});

const resetCount = () => ({
    type: "RESET"
});

//Reducers
//Reducers are pure functions
//Never change state or action

const countReducer = (state={ count: 0 }, action) => {
    switch(action.type) {
        case "INCREMENT":
            return {
                count: state.count + action.incrementBy
            }
        case "DECREMENT":
            return {
                count: state.count - action.decrementBy
            }
        case "RESET":
            return {
                count: 0
            }
        case "SET":
            return {
                count: action.setCount
            }
        default:
            return state;
    }
};

const store = createStore(countReducer);

// gets called everytime the state changes
const unsub = store.subscribe(() => {
    console.log(store.getState());
});

//increment
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

//reset
store.dispatch(resetCount());


//decrement
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 150 }));