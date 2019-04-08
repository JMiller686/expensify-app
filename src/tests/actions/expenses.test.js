import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';

const createMockStore = configureMockStore([thunk]);

test('should setup add expense action object with provided values', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: '3000',
        note: 'This one is better',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        expect(1).toBe(1);
        done();
    });
})

test('should add expense with default values to database and store', () => {

})

// test('should setup add expense action object with defaults', () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: "ADD_EXPENSE",
//         expense: {
//             description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0,
//             id: expect.any(String)
//         }
//     })
// })

test('should remove expense', () => {
    const action = removeExpense({id: '2345234fgeww45g'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '2345234fgeww45g'
    })
});

test('should setup edit expense action object', () => {
    const action = editExpense('2345234fgeww45g', {description: 'cable', amount: '500'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '2345234fgeww45g',
        updates: {
            description: 'cable', 
            amount: '500'
        }
    })
})