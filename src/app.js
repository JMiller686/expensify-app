import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';


import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})


// addExpense -> Water Bill
// addExpense -> Gas Bill
// setTextFilter -> bill
// getVisibleExpenses -> print visible ones to the screen
store.dispatch(addExpense({
    description: 'Water bill',
    amount: 12000,
    createdAt: 1000
}));

store.dispatch(addExpense({
    description: 'Gas bill',
    amount: 15000,
    createdAt: 1005
}));

store.dispatch(addExpense({
    description: 'rent',
    amount: 15000,
    createdAt: 1005
}));

store.dispatch(setTextFilter('water'));


ReactDOM.render(<AppRouter />, document.getElementById('app'));