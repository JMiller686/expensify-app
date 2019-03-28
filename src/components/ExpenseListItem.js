import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

//destructured props to use directly instead of off props object
const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
    <div>
        <h3>{description}</h3>
        <p>{amount} - {createdAt}</p>
        <button onClick={() => {
            dispatch(removeExpense(id))
        }}>Remove</button>
    </div>
);


export default connect()(ExpenseListItem);



